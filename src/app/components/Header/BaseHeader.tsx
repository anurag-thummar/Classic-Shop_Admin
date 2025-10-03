'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PiSignInBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";

const BaseHeader = () => {
    return (
        <div className="px-5 flex items-center justify-between w-full h-full bg-white py-3 z-50 border-b border-[#e0e0e0] sticky top-0">
            <div className="flex items-center gap-x-2">
                <Link href="/" className="flex items-center gap-x-2">
                        <Image
                            src="/images/clasiyLogo.png"
                            className="max-w-[60px] lg:max-w-[60px]"
                            alt="Logo"
                            width={60}
                            height={25}
                        />
                        <h4 className="flex flex-col font-[700] text-[18px] uppercase leading-[1] font-[Roboto]">Classic Shop <span className="mt-1 text-[10px] font-[600] tracking-[2px] pl-[2px]">BIG MEGA STORE</span></h4>

                    </Link>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-x-6">
                    <Link href="/login" className="flex items-center gap-x-1 text-light">
                        <PiSignInBold />
                        <h4 className="flex flex-col font-[500] text-[14px] uppercase leading-[1] font-[Roboto]">Login</h4>
                    </Link>
                    <Link href="/sign-up" className="flex items-center gap-x-1 text-light bg-[#e8e8e8] rounded-full px-[16px] py-3 hover:!bg-blue-100 transition-all duration-150 ease-in-out hover:!text-blue-500 cursor-pointer group">
                        <FaRegUser />
                        <h4 className="flex flex-col font-[500] text-[14px] uppercase leading-[1] font-[Roboto] group-hover:text-blue-500">Sign Up</h4>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BaseHeader;
