import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface TableSelectProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  register: UseFormRegister<any>;
  error?: FieldError;
  placeholder?: string;
}

const TableSelect: React.FC<TableSelectProps> = ({
  label,
  name,
  options,
  register,
  error,
  placeholder,
}) => {
  return (
    <div className="col mb-3">
      <h3 className="text-[14px] font-[500] mb-1 text-black">{label}</h3>
      <select
        {...register(name)}
        className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] 
                   focus:outline-none focus:border-[rgba(0,0,0,0.4)] 
                   rounded-xs p-2 text-sm"
      >
        <option value="">{placeholder}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default TableSelect;
