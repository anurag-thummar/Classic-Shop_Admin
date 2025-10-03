'use client'
import React, { useState } from 'react'
import Sidebar from './components/Sidebar';
import Header from './components/Header/Header';
import PageWrapper from './components/PageWrapper';

const SidebarLayout = ({children}: {children: React.ReactNode}) => {
    const [openSidebar, setOpenSidebar] = useState(true);
    return (
        <>
            <div className="flex w-[100%]">
                {openSidebar && <Sidebar />}
                <div className=" border-b border-[#e0e0e0] bg-white w-full h-[50px]">
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