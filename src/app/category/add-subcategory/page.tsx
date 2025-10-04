'use client'
import TableInput from '@/app/components/select/TableInput'
import TableSelect from '@/app/components/select/TableSelect'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddCategory = () => {
    const { register } = useForm();
    return (
        <form className='px-30 py-10 h-full w-full bg-blue-50'>
                <div className='w-full flex space-x-4'>
                    <div className='w-full'>
                        <h2 className='text-[16px] mb-2 font-semibold'>Add Sub Category</h2>
                        <TableSelect
                            label="Product Category"
                            name="category"
                            options={[]}
                            register={register}
                        />
                        <TableInput
                            label="Sub Category Name"
                            name="subCategory"
                            register={register}
                        />
                        <button type="button" className='buttonUtils !text-[14px] !py-2 !px-4'>Submit</button>
                    </div>
                    <div className='w-full'>
                        <h2 className='text-[16px] mb-2 font-semibold'>Add Third Level Category</h2>
                        <TableSelect
                            label="Product Category"
                            name="category"
                            register={register}
                            options={[]}
                        />
                        <TableInput
                            label="Sub Category Name"
                            name="subCategory"
                            register={register}
                        />
                        <button type="button" className='buttonUtils !text-[14px] !py-2 !px-4'>Submit</button>
                    </div>
                </div>
        </form>
    )
}

export default AddCategory