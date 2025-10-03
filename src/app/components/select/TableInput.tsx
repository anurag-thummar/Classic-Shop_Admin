import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface TableInputProps {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  placeholder?: string;
}

const TableInput: React.FC<TableInputProps> = ({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder,
}) => {
  return (
    <div className="col mb-3">
      <h3 className="text-[14px] font-[500] mb-1 text-black">{label}</h3>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] 
                   focus:outline-none focus:border-[rgba(0,0,0,0.4)] 
                   rounded-xs p-3 text-sm"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default TableInput;
