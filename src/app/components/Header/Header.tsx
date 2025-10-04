'use client';
import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegBell } from "react-icons/fa6";
import { Divider, ListItemIcon, MenuItem } from "@mui/material";
import Menu from "@mui/material/Menu";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
    openSidebar: boolean;
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ openSidebar, setOpenSidebar }: HeaderProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="px-5 flex items-center justify-between w-full h-full bg-white border-b border-[rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-x-2">
                {!openSidebar && (
                    <Link href="/" className="flex items-center gap-x-2">
                    <Image
                        src="/images/clasiyLogo.png"
                        className="max-w-[40px] lg:max-w-[40px]"
                        alt="Logo"
                        width={40}
                        height={20}
                    />
                    <h4 className="flex flex-col font-[700] text-[16px] uppercase leading-[1] font-[Roboto]">Classic Shop <span className="mt-1 text-[8px] font-[600] tracking-[2px] pl-[2px]">BIG MEGA STORE</span></h4>

                </Link>
                )}
            <div
                className="p-2 hover:bg-[#e0e0e0] rounded-full transition-all duration-300 group cursor-pointer"
                onClick={() => setOpenSidebar(!openSidebar)}
            >
                <TfiMenuAlt className="w-[20px] h-[20px] text-black group-hover:text-blue-500" />
            </div>
            </div>

            {/* Right side (Notifications + Avatar) */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <div className="relative p-2 hover:bg-[#e0e0e0] rounded-full transition-all duration-300 group cursor-pointer bg-blue-50">
                    <FaRegBell className="relative text-[25px] text-blue-500 group-hover:text-blue-500" />
                    <span className="absolute top-[0px] right-[0px] inline-flex items-center justify-center w-[20px] h-[21px] font-medium rounded-full bg-[#f25252] text-white text-[11px] border-3 border-white font-[Roboto]">
                        4
                    </span>
                </div>

                {/* Profile Dropdown */}
                <div className="relative">
                    <div
                        className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
                        onClick={handleClick}
                    >
                        <img
                            src="https://lh3.googleusercontent.com/a/ACg8ocJEGcctvy4V_fFiTX7ovMtbohpjsAxHTq3_vSg3Tlv48-mdLGf2=s96-c"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                    mt: 1.5,
                                    "& .MuiAvatar-root": {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    "&::before": {
                                        content: '""',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform: "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: "right", vertical: "top" }}
                        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                        <MenuItem onClick={handleClose} className="flex items-center gap-2">
                            <img
                                src="https://lh3.googleusercontent.com/a/ACg8ocJEGcctvy4V_fFiTX7ovMtbohpjsAxHTq3_vSg3Tlv48-mdLGf2=s96-c"
                                alt=""
                                className="w-[35px] h-[35px] rounded-full"
                            />
                            <div className="flex flex-col">
                                <h5 className="font-medium font-[Roboto] text-[15px]">
                                    Anurag Thummar
                                </h5>
                                <span className="text-[12px] font-[Roboto] text-[#666666]">
                                    anurathumar@gmail.com
                                </span>
                            </div>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <FaRegUserCircle className="w-[20px] h-[20px]" />
                            </ListItemIcon>
                            Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <RiLogoutCircleRLine className="w-[20px] h-[20px]" />
                            </ListItemIcon>
                            Sign Out
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
