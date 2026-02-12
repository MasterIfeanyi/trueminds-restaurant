const Select = ({
  id,
  label,
  disabled,
  placeholder = "Select an option",
  required = false,
  error = "false",
  errorMessage,
  value,
  data,
  onChange,
  showClear,
  onClear,
  ...rest
}) => {
  return (
    <div className="w-full relative mb-4">
      {label && (
        <div className="flex justify-between items-center">
          <label htmlFor={id} className="text-sm text-blackDark font-medium">
            {label}
          </label>
          {showClear && value && (
            <button
              type="button"
              onClick={onClear}
              className="text-xs text-gray-500 hover:text-gray-700 hover:underline focus:outline-none"
            >
              Clear
            </button>
          )}
        </div>
      )}
      <div className="relative">
        <select
          id={id}
          disabled={disabled}
          required={required}
          data-error={error}
          value={value}
          onChange={onChange}
          autoComplete={"off"}
          {...rest}
          className={`
            w-full px-4 py-2 mt-2 text-sm bg-white border rounded h-10 
            transition-all duration-200 ease-in-out
            appearance-none cursor-pointer
            ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
            ${error === "true" 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
              : 'border-btnInactive hover:border-gray-400 focus:border-primary focus:ring-primary'
            }
            focus:outline-none focus:ring-2 focus:ring-opacity-50 
          `}
        >
          <option value="" className="text-gray-500">
            {placeholder}
          </option>
          {data?.map(({ value, label }) => (
            <option 
              key={value} 
              value={value}
              className="py-2 text-gray-900"
            >
              {label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
          <svg className="w-5 h-5 transition-transform duration-200" 
               viewBox="0 0 20 20" 
               fill="currentColor"
               style={{ transform: 'rotate(0deg)' }}>
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {error === "true" && errorMessage && (
        <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default Select;