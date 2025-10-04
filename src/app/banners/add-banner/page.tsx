"use client";
import FileUploader from '@/app/components/select/FileUploader';
import TableInput from '@/app/components/select/TableInput'
import TableSelect from '@/app/components/select/TableSelect';
import React from 'react'
import { useForm } from 'react-hook-form'

const AddBanner = () => {
    const { register } = useForm();
    return (
        <form className='p-6 h-full bg-white'>
            <div className="grid grid-cols-4 gap-4">
                <TableInput label="Banner Title" name="Banner Title" register={register} />
                <TableSelect label="Category" name="Category" options={[]} register={register} />
                <TableSelect label="Sub Category" name="Sub Category" options={[]} register={register} />
                <TableSelect label="Third level Category" name="Third level Category" options={[]} register={register} />
                <TableInput label="Price" name="Price" register={register} />
                <TableInput label="Align Info" name="Align Info" register={register} />
            </div>
            <FileUploader label="Banner Image" name="Banner Image" register={register} />
            <button type="submit" className="buttonUtils bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
    )
}

export default AddBanner