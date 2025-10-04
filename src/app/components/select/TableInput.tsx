import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface TableInputProps {
  label?: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  placeholder?: string;
  className?: string;
}

const TableInput: React.FC<TableInputProps> = ({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder,
  className,
}) => {
  return (
    <div className="">
      <h3 className="text-[14px] font-[500] mb-1 text-black">{label}</h3>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`w-full h-[40px] border border-[rgba(0,0,0,0.2)] 
                   focus:outline-none focus:border-blue-400 bg-white
                   rounded-xs p-3 text-sm mb-4 ${className}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default TableInput;
