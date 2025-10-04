'use client'
import FileUploader from '@/app/components/select/FileUploader'
import TableInput from '@/app/components/select/TableInput'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddCategory = () => {
    const { register } = useForm();
  return (
      <form className='px-5 py-10 h-full bg-blue-50 w-[30%]'>
        <TableInput
          label="Category Name"
          name="categoryName"
          register={register}
        />
        <FileUploader
          label="Category Image"
          name="categoryImage"
          register={register}
        />
        <button type="submit" className='buttonUtils !text-[14px] !py-2 !px-4'>Submit</button>
      </form>
  )
}

export default AddCategory