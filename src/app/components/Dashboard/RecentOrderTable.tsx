
"use client";
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import { useState } from 'react'
import { Pagination } from '@mui/material';

const RecentOrderTable = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div> <div className="mx-5 py-4 relative overflow-x-auto border mt-5 bg-white">
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

    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-5">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3"></th>
          <th scope="col" className="px-6 py-3">Product</th>
          <th scope="col" className="px-6 py-3">Category</th>
          <th scope="col" className="px-6 py-3">Sub Category</th>
          <th scope="col" className="px-6 py-3">Price</th>
          <th scope="col" className="px-6 py-3">Sales</th>
          <th scope="col" className="px-6 py-3">Stock</th>
          <th scope="col" className="px-6 py-3">Rating</th>
          <th scope="col" className="px-6 py-3">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr className="bg-white border-b text-black border-gray-200">
          <td className="px-6 py-4">
            <button
              type="button"
              className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#f1f1f1] text-black hover:text-black transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
          </td>
          <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
            Apple MacBook Pro 17"
          </th>
          <td className="px-6 py-4">Silver</td>
          <td className="px-6 py-4">Laptop</td>
          <td className="px-6 py-4">$2999</td>
          <td className="px-6 py-4">10</td>
          <td className="px-6 py-4">10</td>
          <td className="px-6 py-4">10</td>
          <td className="px-6 py-4">10</td>
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
                    <td className="px-6 py-4">Apple MacBook Pro 17"</td>
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
  </div></div>
  )
}

export default RecentOrderTable