
"use client";
import React from 'react'
import { FaSearch, FaTrashAlt } from 'react-icons/fa'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import { useState } from 'react'
import { Pagination } from '@mui/material';

const RecentOrderTable = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mx-5 py-4 relative overflow-x-auto border mt-5 bg-white ">
            <div className="w-full flex items-center justify-between px-5 py-0 mt-3 my-5">
                <h2 className="text-[18px] font-[600]">
                    Recent Orders <span className="font-[400] text-[14px]"></span>
                </h2>
                <div className="col w-fit flex items-center gap-3">

                    <div className="ml-auto w-full">
                        <div className="w-[500px] h-auto bg-[#f1f1f1] relative overflow-hidden">
                            <FaSearch className="absolute top-[13px] left-[10px] z-50 pointer-events-none opacity-80" />
                            <input type="text" className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] bg-[#f1f1f1] p-2 pl-8 focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-md text-[13px]" placeholder="Search here..." value="" />
                        </div>
                    </div>
                </div>
            </div>

            <table className="w-[40vw] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-5">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {/* Order Id	Paymant Id	Name	Phone Number	Address	Pincode	Total Amount	Email	User Id	Order Status	Date	 */}
                        <th scope="col" className="px-6 py-3"></th>
                        <th scope="col" className="px-6 py-3">Order ID</th>
                        <th scope="col" className="px-6 py-3">Payment ID</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Phone Number</th>
                        <th scope="col" className="px-6 py-3">Address</th>
                        <th scope="col" className="px-6 py-3">Pincode</th>
                        <th scope="col" className="px-6 py-3">Total Amount</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">User Id</th>
                        <th scope="col" className="px-6 py-3">Order Status</th>
                        <th scope="col" className="px-6 py-3 !w-[300px]">Date</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="bg-[#1f2937] border-b text-[#9ca3af] text-[13px] border-gray-200">
                        <td className="px-6 py-4">
                            <button
                                type="button"
                                className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#f1f1f1] text-black hover:text-black transition"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                            </button>
                        </td>

                        <td className="px-6 py-4 font-medium whitespace-nowrap text-[#3872fa] text-[13px]">
                            68e049df228db479bb2a3f76
                        </td>
                        <td className="px-6 py-4 text-[#3872fa] text-[14px] text-nowrap">CASH ON DELIVERY</td>
                        <td className="px-6 py-4">fredrick Nicholas</td>
                        <td className="px-6 py-4">2340816264009</td>
                        <td className="px-6 py-4 font-[500]"><span className="inline-block text-[13px] font-[500] p-1 bg-[#f1f1f1] rounded-md">Home</span><span className="block w-[200px]">9/f4 martin quarters karachi karachi trhrh sindh Pakistan</span></td>
                        <td className="px-6 py-4">105102</td>
                        <td className="px-6 py-4">7998</td>
                        <td className="px-6 py-4">andri***</td>
                        <td className="px-6 py-4">68e0494c228db479bb2a3f14</td>
                        <td className="px-6 py-4 ">confirm</td>
                        <td className="px-6 py-4">2025-10-03</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center justify-center gap-3 text-blue-500">
                                <FaTrashAlt className="text-[17px] hover:text-[#f25252] cursor-pointer" />
                            </div></td>
                    </tr>

                    {isOpen && (
                        <tr>
                            <td colSpan={9} className="p-4 bg-gray-50">
                                <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Product Id</th>
                                            <th scope="col" className="px-6 py-3">Product Title</th>
                                            <th scope="col" className="px-6 py-3">Image</th>
                                            <th scope="col" className="px-6 py-3">Quantity</th>
                                            <th scope="col" className="px-6 py-3">Price</th>
                                            <th scope="col" className="px-6 py-3">Sub Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b text-black">
                                            <td className="px-6 py-4">#101</td>
                                            <td className="px-6 py-4">Apple MacBook Pro 17</td>
                                            <td className="px-6 py-4">
                                                <img src="/macbook.jpg" alt="MacBook" className="w-12 h-12 object-cover rounded" />
                                            </td>
                                            <td className="px-6 py-4">2</td>
                                            <td className="px-6 py-4">$2999</td>
                                            <td className="px-6 py-4">$5998</td>
                                        </tr>
                                        <tr className="bg-white border-b text-black">
                                            <td className="px-6 py-4">#102</td>
                                            <td className="px-6 py-4">Magic Mouse</td>
                                            <td className="px-6 py-4">
                                                <img src="/mouse.jpg" alt="Mouse" className="w-12 h-12 object-cover rounded" />
                                            </td>
                                            <td className="px-6 py-4">1</td>
                                            <td className="px-6 py-4">$199</td>
                                            <td className="px-6 py-4">$199</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="flex items-center justify-center">
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
        </div>
    )
}

export default RecentOrderTable