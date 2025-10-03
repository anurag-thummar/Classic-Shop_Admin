import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface TableTextareaProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  placeholder?: string;
}

const TableTextarea: React.FC<TableTextareaProps> = ({
  label,
  name,
  register,
  error,
  placeholder,
}) => {
  return (
    <div className="col mb-3">
      <h3 className="text-[14px] font-[500] mb-1 text-black">{label}</h3>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className="w-full h-[120px] border border-[rgba(0,0,0,0.2)] 
                   focus:outline-none focus:border-[rgba(0,0,0,0.4)] 
                   rounded-xs p-3 text-sm"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default TableTextarea;
