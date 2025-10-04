"use client";
import React, { useState } from "react";
import { FaChevronDown, FaEye } from "react-icons/fa6";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";
import TableInput from "@/app/components/select/TableInput";
import { useForm } from "react-hook-form";

const SubCategoryList = () => {
    const { register } = useForm();
    const [openAccordion1, setOpenAccordion1] = useState(false);
    const [openAccordion2, setOpenAccordion2] = useState(false);
    const [isShowForm, setIsShowForm] = useState(false);
    const [isShowForm2, setIsShowForm2] = useState(false);

    return (
        <form className="p-6 bg-blue-50 min-h-screen">
            <div className="mx-auto px-5 bg-white py-5 rounded-md">

                {/* ---------- ACCORDION 1 ---------- */}
                <div className="mb-2 border border-gray-200 bg-[#f1f1f1] overflow-hidden shadow-sm">
                    {/* Header */}
                    <button
                        type="button"
                        onClick={() => setOpenAccordion1(!openAccordion1)}
                        className="w-full flex items-center justify-between px-4 py-[6px] font-medium text-[14px] !text-light"
                    >
                        <span>Fashion</span>
                        <div className={`bg-white p-[10px] rounded-full cursor-pointer ${openAccordion1 ? "!bg-blue-400" : ""}`}>
                            <FaChevronDown
                                className={`text-gray-600 text-[12px] transition-transform duration-200 ${openAccordion1 ? "!text-white rotate-180 " : ""
                                    }`}
                            />
                        </div>
                    </button>

                    {/* Content */}
                    {openAccordion1 && (
                        <div className="px-3 py-2 bg-white border-t border-gray-200 transition-all duration-300 ease-in-out">

                            {/* Level 1 Category */}
                            <div className="flex items-center justify-between hover:bg-gray-50 rounded-md transition py-2 px-2">
                                {isShowForm ? (
                                    <div className="flex items-end gap-2 w-full">
                                        <select
                                            defaultValue={10}
                                            className="border border-gray-300 rounded-sm text-[14px] h-[38px] w-[200px] px-2"
                                        >
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </select>

                                        <TableInput name="age" register={register} className="!mb-0" />
                                        <button
                                            type="submit"
                                            className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs"
                                            onClick={() => setIsShowForm(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between w-full">
                                        <span className="text-[14px] font-medium">Women</span>
                                        <div className="flex items-center gap-3 text-blue-500">
                                            <FaEye
                                                className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition"
                                                onClick={() => setIsShowForm(true)}
                                            />
                                            <PiPencilSimpleLineFill
                                                className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition"
                                                onClick={() => setIsShowForm(true)}
                                            />
                                            <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Level 2 Category */}
                            <div className="pl-6 mt-1">
                                {isShowForm2 ? (
                                    <div className="flex items-end gap-2 w-full">
                                        <select
                                            defaultValue={10}
                                            className="border border-gray-300 rounded-sm text-[14px] h-[38px] w-[200px] px-2"
                                        >
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </select>

                                        <TableInput name="age" register={register} className="!mb-0" />
                                        <button
                                            type="submit"
                                            className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs"
                                            onClick={() => setIsShowForm2(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
                                        <span className="text-[14px]">Tops</span>
                                        <div className="flex items-center gap-3 text-blue-500">
                                            <FaEye
                                                className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition"
                                                onClick={() => setIsShowForm2(true)}
                                            />
                                            <PiPencilSimpleLineFill
                                                className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition"
                                                onClick={() => setIsShowForm2(true)}
                                            />
                                            <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Other Categories */}
                            <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
                                <span className="text-[14px] font-medium">Girls</span>
                                <div className="flex items-center gap-3 text-blue-500">
                                    <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
                                    <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
                                    <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
                                </div>
                            </div>

                            <div className="pl-6 mt-1">
                                <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
                                    <span className="text-[14px]">Dresses</span>
                                    <div className="flex items-center gap-3 text-blue-500">
                                        <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
                                        <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
                                        <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* ---------- ACCORDION 1 ---------- */}
                <div className="mb-2 border border-gray-200 bg-[#f1f1f1] overflow-hidden shadow-sm">
                    {/* Header */}
                    <button
                        type="button"
                        onClick={() => setOpenAccordion1(!openAccordion1)}
                        className="w-full flex items-center justify-between px-4 py-[6px] font-medium text-[14px] !text-light"
                    >
                        <span>Fashion</span>
                        <div className={`bg-white p-[10px] rounded-full cursor-pointer ${openAccordion1 ? "!bg-blue-400" : ""}`}>
                            <FaChevronDown
                                className={`text-gray-600 text-[12px] transition-transform duration-200 ${openAccordion1 ? "!text-white rotate-180 " : ""
                                    }`}
                            />
                        </div>
                    </button>

                    {/* Content */}
                    {openAccordion1 && (
                        <div className="px-3 py-2 bg-white border-t border-gray-200 transition-all duration-300 ease-in-out">

                            {/* Level 1 Category */}
                            <div className="flex items-center justify-between hover:bg-gray-50 rounded-md transition py-2 px-2">
                                {isShowForm ? (
                                    <div className="flex items-end gap-2 w-full">
                                        <select
                                            defaultValue={10}
                                            className="border border-gray-300 rounded-sm text-[14px] h-[38px] w-[200px] px-2"
                                        >
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </select>

                                        <TableInput name="age" register={register} className="!mb-0" />
                                        <button
                                            type="submit"
                                            className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs"
                                            onClick={() => setIsShowForm(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between w-full">
                                        <span className="text-[14px] font-medium">Women</span>
                                        <div className="flex items-center gap-3 text-blue-500">
                                            <FaEye
                                                className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition"
                                                onClick={() => setIsShowForm(true)}
                                            />
                                            <PiPencilSimpleLineFill
                                                className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition"
                                                onClick={() => setIsShowForm(true)}
                                            />
                                            <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Level 2 Category */}
                            <div className="pl-6 mt-1">
                                {isShowForm2 ? (
                                    <div className="flex items-end gap-2 w-full">
                                        <select
                                            defaultValue={10}
                                            className="border border-gray-300 rounded-sm text-[14px] h-[38px] w-[200px] px-2"
                                        >
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </select>

                                        <TableInput name="age" register={register} className="!mb-0" />
                                        <button
                                            type="submit"
                                            className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs"
                                            onClick={() => setIsShowForm2(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
                                        <span className="text-[14px]">Tops</span>
                                        <div className="flex items-center gap-3 text-blue-500">
                                            <FaEye
                                                className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition"
                                                onClick={() => setIsShowForm2(true)}
                                            />
                                            <PiPencilSimpleLineFill
                                                className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition"
                                                onClick={() => setIsShowForm2(true)}
                                            />
                                            <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Other Categories */}
                            <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
                                <span className="text-[14px] font-medium">Girls</span>
                                <div className="flex items-center gap-3 text-blue-500">
                                    <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
                                    <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
                                    <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
                                </div>
                            </div>

                            <div className="pl-6 mt-1">
                                <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
                                    <span className="text-[14px]">Dresses</span>
                                    <div className="flex items-center gap-3 text-blue-500">
                                        <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
                                        <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
                                        <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </form>
    );
};

export default SubCategoryList;

// "use client";
// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import { FaChevronDown, FaEye } from 'react-icons/fa6';
// import { PiPencilSimpleLineFill } from 'react-icons/pi';
// import { FaTrashAlt } from 'react-icons/fa';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import TableInput from '@/app/components/select/TableInput';
// import { useForm } from 'react-hook-form';

// const SubCategoryList = () => {
//     const { register } = useForm();
//     const [isShowForm, setIsShowForm] = React.useState(false);
//     const [isShowForm2, setIsShowForm2] = React.useState(false);
//     return (
//         <form className="p-6 bg-blue-50 min-h-screen">
//             <div className="mx-auto px-5 bg-white py-5 rounded-md">
//                 <Accordion
//                     sx={{
//                         borderRadius: "0px !important",
//                         backgroundColor: "#f1f1f1",
//                         boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
//                         overflow: "hidden",
//                         mb: "8px !important",
//                         fontFamily: "Montserrat, sans-serif",
//                         // border: "none !important",
//                     }}
//                 >
//                     <AccordionSummary
//                         expandIcon={<FaChevronDown className="" />}
//                         aria-controls="panel1-content"
//                         id="panel1-header"
//                         sx={{
//                             '& .MuiAccordionSummary-content': {
//                                 display: 'flex',
//                                 alignItems: 'center',
//                             },
//                         }}
//                     >
//                         <Typography
//                             component="span"
//                             className="font-semibold text-[15px] text-gray-800"
//                         >
//                             Fashion
//                         </Typography>
//                     </AccordionSummary>

//                     <AccordionDetails className="bg-white border-t border-gray-200">
//                         {/* Level 1 Category */}
//                         <div className="flex items-center justify-between hover:bg-gray-50 rounded-md transition py-2">
//                             {isShowForm ? (
//                                 <FormControl fullWidth>
//                                     <div className='flex items-end gap-2'>
//                                         <Select
//                                             labelId="demo-simple-select-label"
//                                             id="demo-simple-select"
//                                             size="small"
//                                             className="w-[200px] !rounded-xs"
//                                             defaultValue={10}
//                                         >
//                                             <MenuItem value={10}>Ten</MenuItem>
//                                             <MenuItem value={20}>Twenty</MenuItem>
//                                             <MenuItem value={30}>Thirty</MenuItem>
//                                         </Select>


//                                         <TableInput name="age" register={register} className="!mb-0" />
//                                         <button type="submit" className="buttonUtils  !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs">Submit</button>
//                                         <button type="button" className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs" onClick={() => setIsShowForm(false)}>Cancel</button>
//                                     </div>
//                                 </FormControl>
//                             ) : (
//                                 <div className="w-full flex items-center justify-between py- px-2 hover:bg-gray-50 rounded-md transition">
//                                     <span className="text-[14px] font-medium">Women</span>
//                                     <div className="flex items-center gap-3 text-blue-500">
//                                         <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" onClick={() => setIsShowForm(true)} />
//                                         <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" onClick={() => setIsShowForm(true)} />
//                                         <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Level 2 Category */}
//                         <div className="pl-6 mt-1">
//                             {isShowForm2 ? (
//                                 <FormControl fullWidth>
//                                     <div className='flex items-end gap-2'>
//                                         <Select
//                                             labelId="demo-simple-select-label"
//                                             id="demo-simple-select"
//                                             label="Age"
//                                             size="small"
//                                             className="w-[200px] !rounded-xs"
//                                             defaultValue={10}
//                                         >
//                                             <MenuItem value={10}>Ten</MenuItem>
//                                             <MenuItem value={20}>Twenty</MenuItem>
//                                             <MenuItem value={30}>Thirty</MenuItem>
//                                         </Select>


//                                         <TableInput name="age" register={register} className="!mb-0" />
//                                         <button type="submit" className="buttonUtils  !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs">Submit</button>
//                                         <button type="button" className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs" onClick={() => setIsShowForm2(false)}>Cancel</button>
//                                     </div>
//                                 </FormControl>
//                             ) : (
//                                 <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
//                                     <span className="text-[14px]">Tops</span>
//                                     <div className="flex items-center gap-3 text-blue-500">
//                                         <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" onClick={() => setIsShowForm2(true)} />
//                                         <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" onClick={() => setIsShowForm2(true)} />
//                                         <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                         <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
//                             <span className="text-[14px] font-medium">Girls</span>
//                             <div className="flex items-center gap-3 text-blue-500">
//                                 <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
//                                 <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
//                                 <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
//                             </div>
//                         </div>

//                         {/* Level 2 Category */}
//                         <div className="pl-6 mt-1">
//                             <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
//                                 <span className="text-[14px]">Dresses</span>
//                                 <div className="flex items-center gap-3 text-blue-500">
//                                     <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
//                                     <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
//                                     <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
//                                 </div>
//                             </div>
//                         </div>
//                     </AccordionDetails>
//                 </Accordion>
//                 <Accordion
//                     sx={{
//                         borderRadius: "0px !important",
//                         backgroundColor: "#f1f1f1",
//                         boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
//                         overflow: "hidden",
//                     }}
//                 >
//                     <AccordionSummary
//                         expandIcon={<FaChevronDown className="text-gray-500" />}
//                         aria-controls="panel1-content"
//                         id="panel1-header"
//                         sx={{
//                             '& .MuiAccordionSummary-content': {
//                                 display: 'flex',
//                                 alignItems: 'center',
//                             },
//                         }}
//                     >
//                         <Typography
//                             component="span"
//                             className="font-semibold text-[15px] text-gray-800"
//                         >
//                             Fashion
//                         </Typography>
//                     </AccordionSummary>

//                     <AccordionDetails className="bg-[#fafafa] border-t border-gray-200">
//                         {/* Level 1 Category */}
//                         <div className="flex items-center justify-between hover:bg-gray-50 rounded-md transition py-2">
//                             {isShowForm ? (
//                                 <FormControl fullWidth>
//                                     <div className='flex items-end gap-2'>
//                                         <Select
//                                             labelId="demo-simple-select-label"
//                                             id="demo-simple-select"
//                                             size="small"
//                                             className="w-[200px] !rounded-xs"
//                                             defaultValue={10}
//                                         >
//                                             <MenuItem value={10}>Ten</MenuItem>
//                                             <MenuItem value={20}>Twenty</MenuItem>
//                                             <MenuItem value={30}>Thirty</MenuItem>
//                                         </Select>


//                                         <TableInput name="age" register={register} className="!mb-0" />
//                                         <button type="submit" className="buttonUtils  !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs">Submit</button>
//                                         <button type="button" className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs" onClick={() => setIsShowForm(false)}>Cancel</button>
//                                     </div>
//                                 </FormControl>
//                             ) : (
//                                 <div className="w-full flex items-center justify-between py- px-2 hover:bg-gray-50 rounded-md transition">
//                                     <span className="text-[14px] font-medium">Women</span>
//                                     <div className="flex items-center gap-3 text-blue-500">
//                                         <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" onClick={() => setIsShowForm(true)} />
//                                         <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" onClick={() => setIsShowForm(true)} />
//                                         <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Level 2 Category */}
//                         <div className="pl-6 mt-1">
//                             {isShowForm2 ? (
//                                 <FormControl fullWidth>
//                                     <div className='flex items-end gap-2'>
//                                         <Select
//                                             labelId="demo-simple-select-label"
//                                             id="demo-simple-select"
//                                             label="Age"
//                                             size="small"
//                                             className="w-[200px] !rounded-xs"
//                                             defaultValue={10}
//                                         >
//                                             <MenuItem value={10}>Ten</MenuItem>
//                                             <MenuItem value={20}>Twenty</MenuItem>
//                                             <MenuItem value={30}>Thirty</MenuItem>
//                                         </Select>


//                                         <TableInput name="age" register={register} className="!mb-0" />
//                                         <button type="submit" className="buttonUtils  !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs">Submit</button>
//                                         <button type="button" className="buttonUtils !capitalize !flex !items-center !justify-center !gap-2 !font-[500] !text-[14px] !h-[40px] !w-[120px] !rounded-xs" onClick={() => setIsShowForm2(false)}>Cancel</button>
//                                     </div>
//                                 </FormControl>
//                             ) : (
//                                 <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
//                                     <span className="text-[14px]">Tops</span>
//                                     <div className="flex items-center gap-3 text-blue-500">
//                                         <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" onClick={() => setIsShowForm2(true)} />
//                                         <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" onClick={() => setIsShowForm2(true)} />
//                                         <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                         <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
//                             <span className="text-[14px] font-medium">Girls</span>
//                             <div className="flex items-center gap-3 text-blue-500">
//                                 <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
//                                 <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
//                                 <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
//                             </div>
//                         </div>

//                         {/* Level 2 Category */}
//                         <div className="pl-6 mt-1">
//                             <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded-md transition">
//                                 <span className="text-[14px]">Dresses</span>
//                                 <div className="flex items-center gap-3 text-blue-500">
//                                     <FaEye className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
//                                     <PiPencilSimpleLineFill className="w-[18px] h-[18px] cursor-pointer hover:text-blue-600 transition" />
//                                     <FaTrashAlt className="text-[16px] hover:text-[#f25252] cursor-pointer transition" />
//                                 </div>
//                             </div>
//                         </div>
//                     </AccordionDetails>
//                 </Accordion>
//             </div>
//         </form>
//     );
// };

// export default SubCategoryList;
