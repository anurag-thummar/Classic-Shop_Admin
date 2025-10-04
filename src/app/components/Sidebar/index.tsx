"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  AiFillPicture,
  AiOutlinePicture
} from "react-icons/ai";
import {
  BsFillGrid1X2Fill,
  BsFillPostcardFill
} from "react-icons/bs";
import {
  FaChevronDown,
  FaChevronUp,
  FaProductHunt,
  FaRegSquareMinus,
  FaRegSquarePlus,
  FaUsers
} from "react-icons/fa6";
import { HiViewGrid } from "react-icons/hi";
import {
  IoBagCheck,
  IoGrid,
  IoLogoIonic,
  IoLogOut
} from "react-icons/io5";
import { SlPicture } from "react-icons/sl";
import { TbCategoryFilled } from "react-icons/tb";

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
    url: "/",
    icon: <IoGrid className="text-[20px]" />
  },
  {
    name: "Home Slides",
    icon: <SlPicture className="text-[20px]" />,
    subMenu: [
      { name: "Home Banners List", url: "/home-slides" },
      { name: "Add Home Banner Slide", url: "/home-slides/add-home-slides" }
    ]
  },
  {
    name: "Category",
    icon: <TbCategoryFilled className="text-[22px]" />,
    subMenu: [
      { name: "Category List", url: "/category/list" },
      { name: "Add A Category", url: "/category/add-category" },
      { name: "Sub Category List", url: "/category/subcategory-list" },
      { name: "Add A Sub Category", url: "/category/add-subcategory" }
    ]
  },
  {
    name: "Product",
    icon: <FaProductHunt className="text-[22px]" />,
    subMenu: [
      { name: "Product List", url: "/products" },
      { name: "Product Upload", url: "/products/upload" },
      { name: "Add Product RAMS", url: "/products/rams" },
      { name: "Add Product WEIGHT", url: "/products/weight" },
      { name: "Add Product SIZE", url: "/products/size" }
    ]
  },
  {
    name: "Users",
    url: "/users",
    icon: <FaUsers className="text-[22px]" />
  },
  {
    name: "Orders",
    url: "/orders",
    icon: <IoBagCheck className="text-[22px]" />
  },
  {
    name: "Banners",
    icon: <AiFillPicture className="text-[22px]" />,
    subMenu: [
      { name: "Home Banner List", url: "/banners" },
      { name: "Add Home Banner", url: "/banners/add" },
      { name: "Home Banner List 2", url: "/banners/list2" },
      { name: "Add A Home Banner", url: "/banners/add2" }
    ]
  },
  {
    name: "Blog",
    icon: <BsFillPostcardFill className="text-[22px]" />,
    subMenu: [
      { name: "Blog List", url: "/blogs" },
      { name: "Add Blog", url: "/blogs/add" }
    ]
  },
  {
    name: "Manage Logo",
    url: "/manage-logo",
    icon: <IoLogoIonic className="text-[22px]" />
  },
  {
    name: "Logout",
    url: "/logout",
    icon: <IoLogOut className="text-[24px]" />
  }
];

const Sidebar = () => {
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const activePath = usePathname();

  const handleToggle = (key: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <Box
        // sx={{ width: 305 }}
        role="presentation"
        onClick={(e) => e.stopPropagation()}
        className="h-[100vh] border-r-1 border-[#e0e0e0] bg-white"
      >
        <div className="flex items-center p-3 w-full justify-center">
          <Link href="/" className="flex items-center gap-x-2">
            <Image
              src="/images/clasiyLogo.png"
              className="max-w-[60px] lg:max-w-[60px]"
              alt="Logo"
              width={60}
              height={20}
            />
            <h4 className="flex flex-col font-[700] text-[20px] uppercase leading-[1] font-[Roboto]">
              Classic Shop{" "}
              <span className="mt-1 text-[9px] font-[600] tracking-[4px] pl-[2px]">
                BIG MEGA STORE
              </span>
            </h4>
          </Link>
        </div>

        <div className="h-fit">
          <ul className="w-full">
            {menuData.map((category, i) => (
              <li key={i} className="list-none flex flex-col mb-1">
                <div
                  onClick={() => {
                    if (category.subMenu) {
                      handleToggle(`cat-${i}`);
                    }
                  }}
                  className={`flex justify-between items-center w-full pl-6 pr-[35px] py-[10px] cursor-pointer hover:bg-[#1976d20a] font-[Roboto] font-medium text-[#000000cc] text-[14px] hover:text-blue-500 ${activePath === category.url ? "!bg-blue-100" : ""}`}
                >
                  <div className={`flex items-center gap-x-4 w-[30px] ${activePath === category.url ? "!text-blue-500" : ""}`}>
                    {category.icon}
                  </div>
                  <div className="w-full flex items-center justify-between px-2">
                    {category.url ? (
                      <Link
                        href={category.url}
                        className={`font-[Roboto] font-medium text-[15px] ${
                          activePath === category.url
                            ? "text-blue-600"
                            : "text-[#000000cc]"
                        }`}
                      >
                        {category.name}
                      </Link>
                    ) : (
                      <h4 className="font-[Roboto] font-medium text-[#000000cc] text-[15px]">
                        {category.name}
                      </h4>
                    )}
                    {category.subMenu && (
                      <>
                        {openSubmenus[`cat-${i}`] ? (
                          <FaChevronUp className="text-[12px]" />
                        ) : (
                          <FaChevronDown className="text-[12px]" />
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Submenu */}
                {category.subMenu && openSubmenus[`cat-${i}`] && (
                  <ul className="pl-3 mt-1">
                    {category.subMenu.map((sub, j) => (
                      <li key={j} className="relative list-none">
                        <div
                          onClick={() => {
                            if (sub.children) {
                              handleToggle(`cat-${i}-sub-${j}`);
                            }
                          }}
                          className="flex ml-9 gap-3 items-center px-3 pr-[22px] py-[6px] cursor-pointer hover:bg-[#1976d20a] rounded text-[#000000cc] font-[Roboto] font-medium text-[14px]"
                        >
                          <div
                            className={`w-[8px] h-[2px] rounded-full flex items-center justify-center ${
                              activePath === sub.url
                                ? "bg-[#1976d2]"
                                : "bg-blue-200"
                            }`}
                          ></div>

                          {sub.url ? (
                            <Link
                              href={sub.url}
                              className={`${
                                activePath === sub.url
                                  ? "text-blue-600"
                                  : "text-[#000000cc]"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ) : (
                            sub.name
                          )}

                          {sub.children &&
                            (openSubmenus[`cat-${i}-sub-${j}`] ? (
                              <FaRegSquareMinus className="w-[16px] h-[16px]" />
                            ) : (
                              <FaRegSquarePlus className="w-[16px] h-[16px]" />
                            ))}
                        </div>

                        {sub.children &&
                          openSubmenus[`cat-${i}-sub-${j}`] && (
                            <ul className="pl-3 mt-1">
                              {sub.children.map((child, k) => (
                                <li key={k} className="mb-1">
                                  <Link
                                    href={child.url}
                                    className={`block px-3 py-[2px] rounded text-[14px] ${
                                      activePath === child.url
                                        ? "text-blue-600"
                                        : "hover:text-blue-500"
                                    }`}
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
  );
};

export default Sidebar;
