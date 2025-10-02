'use client';
import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import Sidebar from "../Sidebar";

const Header = () => {
    const [openSidebar, setOpenSidebar] = useState(true);
    return (
        <>
            {/* <div className="flex">

                {openSidebar && <Sidebar />}

                <header className="px-2 border-b border-[#e0e0e0] bg-amber-50 w-full h-[50px]">
                    <div className="flex items-center justify-between w-full h-full">
                        <div className=" p-2 hover:bg-[#e0e0e0] rounded-full transition-all duration-300 group cursor-pointer" onClick={() => setOpenSidebar(!openSidebar)}>
                            <TfiMenuAlt className="w-[20px] h-[20px] group-hover:text-blue-500 " />
                        </div>
                    </div>
                </header>
            </div> */}
        </>
    );
};

export default Header;
