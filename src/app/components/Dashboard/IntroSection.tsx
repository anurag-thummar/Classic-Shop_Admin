import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { FiPieChart } from 'react-icons/fi'
import { IoStatsChartSharp } from 'react-icons/io5'

const IntroSection = () => {
    return (
        <div>
            <div className="contentRight overflow-hidden py-4 px-5 false transition-all">
                <div className="w-full py-4 lg:py-1 px-5 border bg-[#f1faff] border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
                    <div className="info">
                        <h1 className="text-[26px] lg:text-[35px] font-bold leading-8 lg:leading-10 mb-3">Welcome,<br />
                            <span className="text-primary">Anurag Thummar</span>
                        </h1>
                        <p>Here’s What happening on your store today. See the statistics at once.</p>
                        <br />
                        <button className="buttonUtils !capitalize !flex !items-center !gap-2 !bg-blue-500" type="button">
                            <FaPlus className="!text-[20px] !font-normal" /> Add Product</button>
                    </div>
                    <img src="https://ecommerce-admin-view.netlify.app/shop-illustration.webp" className="w-[250px] hidden lg:block" />
                </div>
            </div>
            <div className="px-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="box w-full bg-[#10b981] p-5 py-6  cursor-pointer hover:bg-[#289974] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <FiPieChart className="!text-[40px] !text-[#fff]" />
                        <div className="info w-[80%]">
                            <h3 className="text-white">Total Users</h3>
                            <b className="text-white text-[20px]">3279</b>
                        </div>
                        <IoStatsChartSharp className="!text-[40px] !text-[#fff]" />
                    </div>
                    <div className="box w-full bg-[#3872fa] p-5 py-6  cursor-pointer hover:bg-[#289974] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <FiPieChart className="!text-[40px] !text-[#fff]" />
                        <div className="info w-[80%]">
                            <h3 className="text-white">Total Users</h3>
                            <b className="text-white text-[20px]">3279</b>
                        </div>
                        <IoStatsChartSharp className="!text-[40px] !text-[#fff]" />
                    </div>
                    <div className="box w-full bg-[#312be1d8] p-5 py-6  cursor-pointer hover:bg-[#289974] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <FiPieChart className="!text-[40px] !text-[#fff]" />
                        <div className="info w-[80%]">
                            <h3 className="text-white">Total Users</h3>
                            <b className="text-white text-[20px]">3279</b>
                        </div>
                        <IoStatsChartSharp className="!text-[40px] !text-[#fff]" />
                    </div>
                    <div className="box w-full bg-[#f22c61] p-5 py-6  cursor-pointer hover:bg-[#289974] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                        <FiPieChart className="!text-[40px] !text-[#fff]" />
                        <div className="info w-[80%]">
                            <h3 className="text-white">Total Users</h3>
                            <b className="text-white text-[20px]">3279</b>
                        </div>
                        <IoStatsChartSharp className="!text-[40px] !text-[#fff]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroSection