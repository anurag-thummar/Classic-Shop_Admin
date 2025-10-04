'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { CircularProgress, Alert } from '@mui/material';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email');
      return;
    }

    try {
      setLoading(true);
      // TODO: Call API to send reset link
      await new Promise((res) => setTimeout(res, 1500));
      setSuccess('Password reset link has been sent to your email.');
    } catch (err) {
      setError('Failed to send reset link.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Image
        src="/images/patern.webp"
        className="w-full fixed top-0 left-0 opacity-5"
        alt="background pattern"
        width={60}
        height={20}
      />

      <div className="loginBox card w-full md:w-[500px] h-auto pb-20 mx-auto pt-5 lg:pt-20 relative z-9">
        <div className="text-center">
          <Image
            src="https://ecommerce-admin-view.netlify.app/icon.svg"
            width={60}
            height={20}
            className="m-auto"
            alt="logo"
          />
        </div>

        <h1 className="text-center text-[18px] sm:text-[28px] font-[800] mt-4">
          Forgot Password <br />
          Enter your email to reset password.
        </h1>

        <div className="flex items-center justify-center w-full mt-5 gap-4">
          <button
            className="!bg-none !py-2 !text-[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)] flex items-center gap-2 rounded-md hover:bg-blue-50 cursor-pointer border border-blue-400"
            type="button"
          >
            <span className="font-[500] font-[Roboto]">Sign in with Google</span>
            <FcGoogle size={20} />
          </button>
        </div>

        <div className="w-full flex items-center justify-center gap-3 my-4">
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
          <span className="text-[10px] lg:text-[14px] font-[500]">
            Or, reset with your email
          </span>
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
        </div>

        {error && <Alert severity="error" className="w-full mb-4">{error}</Alert>}
        {success && <Alert severity="success" className="w-full mb-4">{success}</Alert>}

        <form className="w-full px-8 mt-3" onSubmit={handleSubmit} noValidate>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-[40px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:!border-blue-500 focus:outline-none px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              autoComplete="email"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="buttonUtils flex items-center justify-center w-full !py-3 rounded-md text-white font-semibold"
          >
            {loading ? (
              <CircularProgress size={18} color="inherit" />
            ) : (
              'Send OTP'
            )}
          </button>

          <div className="flex items-center justify-between mt-4">
            <Link
              href="/login"
              className="text-primary font-[700] text-[15px] hover:underline hover:text-gray-700 cursor-pointer"
            >
              Back to Login
            </Link>
            <Link
              href="/sign-up"
              className="text-primary font-[700] text-[15px] hover:underline hover:text-gray-700 cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
