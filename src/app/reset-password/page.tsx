'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { TextField, Button, Alert, CircularProgress, Typography } from '@mui/material'
import Image from 'next/image'

const ResetPasswordPage: React.FC = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const [loading, setLoading] = useState(false)
    const [resendLoading, setResendLoading] = useState(false)
    const [errors, setErrors] = useState<{ otp?: string; general?: string }>({})
    const [success, setSuccess] = useState(false)
    const [timer, setTimer] = useState(60)
    const [canResend, setCanResend] = useState(false)

    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    // Timer for resend OTP
    useEffect(() => {
        if (timer > 0 && !canResend) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000)
            return () => clearTimeout(countdown)
        } else if (timer === 0 && !canResend) {
            setCanResend(true)
        }
    }, [timer, canResend])

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return // Only allow numbers

        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)
        setErrors({})

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            // Move to previous input on backspace
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData('text').slice(0, 6)
        if (/^\d+$/.test(pastedData)) {
            const newOtp = pastedData.split('').concat(Array(6 - pastedData.length).fill(''))
            setOtp(newOtp)
            setErrors({})
            // Focus the last input
            inputRefs.current[Math.min(pastedData.length, 5)]?.focus()
        }
    }

    const validate = () => {
        if (otp.some(digit => digit === '')) {
            setErrors({ otp: 'Please enter all 6 digits' })
            return false
        }
        if (otp.join('').length !== 6) {
            setErrors({ otp: 'OTP must be 6 digits' })
            return false
        }
        return true
    }

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        try {
            setLoading(true)
            setErrors({})

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))

            // In real implementation:
            // await verifyOtp(otp.join(''))

            setSuccess(true)
        } catch (err) {
            setErrors({ general: 'Invalid OTP. Please try again.' })
        } finally {
            setLoading(false)
        }
    }

    const handleResendOtp = async () => {
        try {
            setResendLoading(true)
            setErrors({})

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            // In real implementation:
            // await resendOtp()

            setTimer(60)
            setCanResend(false)
            setOtp(['', '', '', '', '', ''])
            inputRefs.current[0]?.focus()

        } catch (err) {
            setErrors({ general: 'Failed to resend OTP. Please try again.' })
        } finally {
            setResendLoading(false)
        }
    }

    return (
        <div>
            <section className="section py-10">
                <div className="container !flex !flex-col !justify-center !items-center">
                    <h3 className="text-center text-[24px] uppercase font-roboto font-bold mb-6 text-light">
                        Verify OTP
                    </h3>

                    <div className="card shadow-md w-[450px] m-auto rounded-md bg-white p-5 pb-8 px-10 flex flex-col items-center justify-center">
                        <Link href="/" className="flex items-center mb-5 mt-2 gap-x-2">
                            <Image
                                src="/images/clasiyLogo.png"
                                className="max-w-[60px] lg:max-w-[60px]"
                                alt="Logo"
                                width={60}
                                height={20}
                            />
                            <h4 className="flex flex-col font-[700] text-[20px] uppercase leading-[1] font-[Roboto]">
                                Classic Shop <span className="mt-1 text-[9px] font-[600] tracking-[4px] pl-[2px]">BIG MEGA STORE</span>
                            </h4>
                        </Link>

                        {errors.general && (
                            <Alert severity="error" className="w-full mb-4">
                                {errors.general}
                            </Alert>
                        )}

                        {success ? (
                            <div className="w-full text-center space-y-4">
                                <Alert severity="success" className="w-full">
                                    OTP verified successfully!
                                </Alert>
                                <p className="text-sm text-light font-[500]">
                                    Your password has been reset successfully. You can now login with your new password.
                                </p>
                                <Link href="/login" className="block mt-4">
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        className="buttonUtils"
                                    >
                                        Continue to Login
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                <p className="text-sm text-light font-[500] text-center mb-6">
                                    Enter the 6-digit verification code sent to your email address.
                                </p>

                                <form className="w-full space-y-6" onSubmit={handleVerify} noValidate>
                                    <div className="form-group w-full">
                                        <div className="flex justify-center gap-2 mb-2">
                                            {otp.map((digit, index) => (
                                                <TextField
                                                    key={index}
                                                    inputRef={(el) => inputRefs.current[index] = el}
                                                    value={digit}
                                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                                    onPaste={index === 0 ? handlePaste : undefined}
                                                    inputProps={{
                                                        maxLength: 1,
                                                        style: {
                                                            textAlign: 'center',
                                                            fontSize: '20px',
                                                            fontWeight: 'bold'
                                                        }
                                                    }}
                                                    className="w-12"
                                                    size="small"
                                                    error={!!errors.otp}
                                                    autoFocus={index === 0}
                                                />
                                            ))}
                                        </div>
                                        {errors.otp && (
                                            <Typography
                                                color="error"
                                                variant="caption"
                                                className="text-center block mt-2"
                                            >
                                                {errors.otp}
                                            </Typography>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className='buttonUtils flex items-center justify-center !w-full !hover:bg-black !hover:text-white'
                                    >
                                        {loading ? (
                                            <span className="flex items-center justify-center gap-2 py-[3px]">
                                                <CircularProgress size={18} color="inherit" />
                                            </span>
                                        ) : (
                                            'Verify OTP'
                                        )}
                                    </button>

                                    <div className="text-center space-y-3">
                                        <div className="text-sm text-gray-600">
                                            {canResend ? (
                                                <button
                                                    type="button"
                                                    onClick={handleResendOtp}
                                                    disabled={resendLoading}
                                                    className="text-blue-500 hover:underline font-[600] font-[Roboto] disabled:opacity-50"
                                                >
                                                    {resendLoading ? (
                                                        <span className="flex items-center justify-center gap-2 py-[3px]">
                                                            <CircularProgress size={14} color="inherit" />
                                                        </span>
                                                    ) : (
                                                        <span className="text-sm text-light font-[600]">
                                                            Resend OTP
                                                        </span>
                                                    )}
                                                </button>
                                            ) : (
                                                <span className="text-sm text-light font-[600]">
                                                    Didn&rsquo;t receive code? Resend in{' '}
                                                    <span className="font-bold text-blue-600">{timer}s</span>
                                                </span>
                                            )}
                                        </div>

                                        <div className="pt-2 border-t border-gray-200">
                                            <Link
                                                href="/forgot-password"
                                                className="text-blue-500 hover:underline text-sm font-[600] font-[Roboto]"
                                            >
                                                Back to Forgot Password
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ResetPasswordPage
