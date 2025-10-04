'use client'
import React, { useState } from 'react'
import Sidebar from './components/Sidebar';
import Header from './components/Header/Header';
import PageWrapper from './components/PageWrapper';

const SidebarLayout = ({children}: {children: React.ReactNode}) => {
    const [openSidebar, setOpenSidebar] = useState(true);
    return (
        <>
            <div className="flex ">
                <div className={`${openSidebar ? "w-[20%]" : "w-[0%]"}`}>
                {openSidebar && <Sidebar />}
                </div>
                <div className={` border-b border-[#e0e0e0] bg-white w-[80%] h-[50px] ${openSidebar ? "w-[80%]" : "w-[100%]"}`}>
                    <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
                    <PageWrapper>
                    {children} 
                    </PageWrapper>
                </div>
            </div>
        </>
    )
}

export default SidebarLayout