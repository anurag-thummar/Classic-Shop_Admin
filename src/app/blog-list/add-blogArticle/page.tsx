"use client"
import FileUploader from '@/app/components/select/FileUploader';
import TableInput from '@/app/components/select/TableInput'
import React from 'react'
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const AddBlogArticle = () => {
  const { register } = useForm();
  const [value, setValue] = React.useState('');

  return (
    <form action="" className="bg-white h-full">
      <div className="flex items-start gap-4 flex-col p-5 w-[50%]">
        <TableInput 
          name="Title" 
          placeholder="Title" 
          register={register} 
          className="!w-full !border !border-gray-300 !p-2 !outline-none !focus:ring-1 !focus:ring-blue-500" 
          label='Title'
        />

        {/* ReactQuill wrapper */}
        <div className="w-full mb-6">
          <ReactQuill 
            theme="snow" 
            value={value} 
            onChange={setValue} 
            className="custom-quill !h-[200px]" 
          />
        </div>

        <FileUploader name="Image" register={register} label="Image" />
      <button type='submit' className='buttonUtils'>Submit</button>
      </div>
    </form>
  )
}

export default AddBlogArticle;
