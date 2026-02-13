import React from "react";

export default function Switch({checked, onChange, disabled = false}) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className="sr-only peer" 
        disabled={disabled}
      />
      <div 
        className="w-8 
                    h-4
                    bg-grey
                    peer-focus:outline-none 
                    peer-focus:ring-1
                    peer-focus:ring-white 
                    dark:peer-focus:ring-btnInactive 
                    rounded-full 
                    peer 
                    dark:bg-btnInactive 
                    peer-checked:after:translate-x-full 
                    rtl:peer-checked:after:-translate-x-full 
                    peer-checked:after:border-green 
                    after:content-[''] 
                    after:absolute 
                    after:top-0 
                    after:start-0.5
                    after:bg-white 
                    after:border-grey 
                    after:border 
                    after:rounded-full 
                    after:h-4
                    after:w-[.9rem]
                    after:transition-all 
                    dark:border-primary 
                    peer-checked:bg-primary
                    peer-disabled:cursor-not-allowed
                    "/>
      {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Toggle me
      </span> */}
    </label>
  );
}