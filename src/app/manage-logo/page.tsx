"use client";
import React from 'react'
import FileUploader from '@/app/components/select/FileUploader'
import { useForm } from 'react-hook-form'

const ManageLogo = () => {
    const {
        register,
    } = useForm();
    return (
        <form className='m-5 px-5 pb-5 bg-white'>
            <FileUploader
                label="Manage Logo"
                name="images"
                register={register}
                // error={errors?.images}
            />
            <button type='submit' className='buttonUtils !text-[14px]'>Submit</button>
        </form>
    )
}

export default ManageLogo