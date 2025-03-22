import React from "react";

export function Inputbox({ label, placeholder }) {
  return (
    <div className="flex flex-col items-start w-full">
      <label
        htmlFor={label}
        className="text-[#6C25FF] text-md font-semibold px-1 bg-[#F7F8F9]"
      >
        {label}
      </label>
      <input
        id={label}
        type="text"
        placeholder={placeholder}
        name="input"
        className="border-[#6C25FF] px-3 py-2 text-black text-md bg-[#F7F8F9] border-2 rounded-md w-full max-w-md focus:outline-none placeholder:text-black/25"
      />
    </div>
  );
}
