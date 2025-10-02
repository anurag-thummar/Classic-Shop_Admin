"use client";
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { AiFillPicture, AiOutlinePicture } from 'react-icons/ai';
import { BsFillGrid1X2Fill, BsFillPostcardFill } from 'react-icons/bs';
import { FaChevronDown, FaChevronUp, FaProductHunt, FaRegSquareMinus, FaRegSquarePlus, FaUsers } from 'react-icons/fa6';
import { FcPicture } from 'react-icons/fc';
import { HiViewGrid } from 'react-icons/hi';
import { IoBagCheck, IoCloseSharp, IoGrid, IoLogoIonic, IoLogOut } from 'react-icons/io5';
import { SlPicture } from 'react-icons/sl';
import { TbArrowRightDashed, TbCategoryFilled } from 'react-icons/tb';

interface ChildItem {
    name: string;
    url: string;
    icon?: React.ReactNode;
}

interface SubMenu {
    name: string;
    children?: ChildItem[];
    url?: string;
}

interface MenuCategory {
    name: string;
    url?: string;
    subMenu?: SubMenu[];
    icon?: React.ReactNode;
}

const menuData: MenuCategory[] = [
    {
        name: "Dashboard",
        url: "/ddfdf",
        icon: <IoGrid className="text-[20px]" />
    },
    {
        name: "Home Slides",
        icon: <SlPicture className='text-[20px]' />,
        subMenu: [
            {
                name: "Home Banners List",
                url: "/home-slides",
            },
            {
                name: "Add Home Banner Slide",
                url: "/home-slides/add",
            },
        ],
    },
    {
        name: "Category",
        icon: <TbCategoryFilled className='text-[22px]' />,
        subMenu: [
            {
                name: "Category List",
            },
            {
                name: "Add A Category",
            },
            {
                name: "Sub Category List",
            },
            {
                name: "Add A Sub Category",
            },
        ],
    },
    {
        name: "Product",
        icon: <FaProductHunt className='text-[22px]' />,
        subMenu: [
            {
                name: "Product List",
            },
            {
                name: "Product Upload",
            },
            {
                name: "Add Product RAMS",
            },
            {
                name: "Add Product WEIGHT",
            },
            {
                name: "Add Product SIZE",
            },
        ],
    },
    {
        name: "Users",
        icon: <FaUsers className='text-[22px]' />,
    },
    {
        name: "Orders",
        icon: <IoBagCheck className='text-[22px]' />,
    },
    {
        name: "Banners",
        icon: <AiFillPicture className='text-[22px]' />,
        subMenu: [
            {
                name: "Home Banner List",
            },
            {
                name: "Add Home Banner",
            },
            {
                name: "Home Banner List 2",
            },
            {
                name: "Add A Home Banner",
            },
        ],
    },
    {
        name: "Blog",
        icon: <BsFillPostcardFill className='text-[22px]' />,
        subMenu: [
            {
                name: "Blog List",
            },
            {
                name: "Add Blog",
            },
        ],
    },
    {
        name: "Manage Logo",
        icon: <IoLogoIonic className='text-[22px]' />,
    },
    {
        name: "Logout",
        icon: <IoLogOut className='text-[24px]' />,
    },
];

const Sidebar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const toggleCategoryPanel = (open: boolean) => {
        setOpen(open);
    };
    const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

    const handleToggle = (key: string) => {
        setOpenSubmenus(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const activePath = usePathname();
    return (
        <div className=''>
            <Box
                sx={{ width: 305 }}
                role="presentation"
                onClick={(e) => e.stopPropagation()}
                className="h-[100vh] border-r-2 border-[#e0e0e0]"
            >
                <div className="flex items-center p-3">
                    <Link href="/" className="flex items-center gap-x-2">
                        <Image
                            src="/images/clasiyLogo.png"
                            className="max-w-[60px] lg:max-w-[60px]"
                            alt="Logo"
                            width={60}
                            height={20}
                        />
                        <h4 className="flex flex-col font-[700] text-[20px] uppercase leading-[1] font-[Roboto]">Classic Shop <span className="mt-1 text-[9px] font-[600] tracking-[4px] pl-[2px]">BIG MEGA STORE</span></h4>

                    </Link>
                </div>
                <div className="flex items-center justify-between p-3">
                    {/* <h3 className="font-medium">Shop By Categories</h3>
        <button onClick={() => toggleCategoryPanel(false)}>
            <IoCloseSharp className="w-[20px] h-[20px] text-[#3e3e3e] cursor-pointer" />
        </button> */}
                </div>
                <div className="h-fit">
                    <ul className="w-full">
                        {menuData.map((category, i) => (
                            <li key={i} className="list-none flex flex-col mb-1">
                                <div
                                    onClick={() => {
                                        handleToggle(`cat-${i}`);
                                        if (category.url) {
                                            router.push(category.url);
                                        }
                                    }}
                                    className="flex justify-between items-center w-full pl-6 pr-[35px] py-[10px] cursor-pointer hover:bg-[#1976d20a] rounded font-[Roboto] font-medium text-[#000000cc] text-[14px]"
                                >
                                    <div className="flex items-center gap-x-4 w-[30px]">
                                        {category.icon}
                                    </div>
                                    <div className="w-full flex items-center justify-between px-2">

                                        <h4 className="font-[Roboto] font-medium text-[#000000cc] text-[15px]" >{category.name}</h4>
                                        {openSubmenus[`cat-${i}`] && category.subMenu && (
                                            <FaChevronUp className="text-[12px]" />
                                        )}
                                        {!openSubmenus[`cat-${i}`] && category.subMenu && (
                                            <FaChevronDown className="text-[12px]" />
                                        )}
                                    </div>
                                </div>

                                {category.subMenu && openSubmenus[`cat-${i}`] && (
                                    <ul className="pl-3 mt-1">
                                        {category.subMenu.map((sub, j) => (
                                            <li key={j} className="relative list-none">
                                                <div
                                                    onClick={() => {
                                                        if (category.subMenu) {
                                                            handleToggle(`cat-${i}`);
                                                        } else if (category.url) {
                                                            router.push(category.url);
                                                        }
                                                    }}
                                                    className="flex ml-9 gap-3 items-center  px-3 pr-[22px] py-[6px] cursor-pointer hover:bg-[#1976d20a] rounded text-[#000000cc] font-[Roboto] font-medium text-[14px]"
                                                >
                                                    <div
                                                        className={`w-[8px] h-[2px] rounded-full flex items-center justify-center 
    ${activePath === sub.url ? "bg-[#1976d2]" : "bg-blue-200"}`}
                                                    ></div>

                                                    {sub.name}
                                                    {sub.children && openSubmenus[`cat-${i}-sub-${j}`] && <FaRegSquareMinus className="w-[16px] h-[16px]" />}
                                                    {sub.children && !openSubmenus[`cat-${i}-sub-${j}`] && <FaRegSquarePlus className="w-[16px] h-[16px]" />}
                                                </div>
                                                {sub.children && openSubmenus[`cat-${i}-sub-${j}`] && (
                                                    <ul className="pl-3 mt-1">
                                                        {sub.children.map((child, k) => (
                                                            <li key={k} className="mb-1">
                                                                <Link
                                                                    href={child.url}
                                                                    className="block px-3 py-[2px] rounded hover:text-blue-500 text-[14px]"
                                                                >
                                                                    {child.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </Box>
        </div>
    )
}

export default Sidebar