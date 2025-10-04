'use client'
import TableInput from "@/app/components/select/TableInput";
import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { GoTrash } from "react-icons/go";

const AddProductSize = () => {
    const { register } = useForm();
  return (
    <div className="contentRight overflow-hidden py-4 px-5 transition-all w-[80%]">
      {/* Header */}
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">Add Product Weight</h2>
      </div>

      {/* Form Card */}
      <div className="card my-4 pt-5 pb-5 shadow-md sm:rounded-lg bg-white w-full lg:w-[65%]">
        <form className="form py-3 p-6">
          <div className="col mb-4">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              PRODUCT RAM
            </h3>
            <TableInput
            //   label="Product RAM"
              name="name"
              placeholder="Enter RAM size (e.g. 8GB)"
              register={register}
            />
          </div>

          <button
            type="submit"
            className="btn-blue btn-lg w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
          >
            <FaCloudUploadAlt className="text-[22px]" />
            Publish and View
          </button>
        </form>
      </div>

      {/* Table Card */}
      <div className="card my-4 pt-5 pb-5 shadow-md sm:rounded-lg bg-white w-full lg:w-[65%]">
        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-[#9ca3af] uppercase bg-[#374151]">
              <tr>
                <th className="px-6 py-3 w-[60%]">PRODUCT RAM</th>
                <th className="px-6 py-3 w-[30%] text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {["5GB", "6GB", "8GB"].map((ram, i) => (
                <tr
                  key={i}
                  className="odd:bg-[#111827] even:bg-[#374151] border-b text-[#9ca3af]"
                >
                  <td className="px-6 py-2 font-[600]">{ram}</td>
                  <td className="px-6 py-2">
                    <div className="flex items-center gap-2 justify-center">
                      <button
                        type="button"
                        className="w-[35px] h-[35px] bg-gray-100 border border-gray-400 rounded-full flex items-center justify-center hover:bg-blue-100 cursor-pointer"
                      >
                        <PiPencilSimpleLineFill className="text-blue-500 text-[18px]" />
                      </button>
                      <button
                        type="button"
                        className="w-[35px] h-[35px] bg-gray-100 border border-gray-400 rounded-full flex items-center justify-center hover:bg-red-100 cursor-pointer"
                      >
                        <GoTrash className="text-[#f25252] text-[18px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddProductSize;
