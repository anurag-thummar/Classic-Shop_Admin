import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { FaRegImages } from "react-icons/fa6";

interface FileUploaderProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  multiple?: boolean;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  name,
  register,
  error,
  multiple = false,
}) => {
  return (
    <div className="col w-full p-5 px-0">
      <h3 className="font-[700] text-[18px] mb-3">{label}</h3>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
        <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed 
                        border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 
                        cursor-pointer hover:bg-gray-200 flex items-center 
                        justify-center flex-col relative">
          <FaRegImages className="text-[40px] opacity-35 pointer-events-none" />
          <h4 className="text-[14px] pointer-events-none">Image Upload</h4>
          <input type="file" accept="image/*" multiple className="absolute top-0 left-0 w-full h-full z-50 opacity-0" name={name} />
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
