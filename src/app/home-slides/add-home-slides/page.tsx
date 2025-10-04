'use client'
import FileUploader from '@/app/components/select/FileUploader'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddHomeSlides = () => {
  const { register } = useForm();
  return (
    <form className='px-5'>
      <FileUploader
        label="Upload Image"
        name="image"
        register={register}
      />
      <button type="submit" className='buttonUtils !text-[14px] !py-2 !px-4'>Submit</button>
    </form>
  )
}

export default AddHomeSlides