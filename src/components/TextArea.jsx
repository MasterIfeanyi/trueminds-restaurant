export default function TextArea({ 
  id,
  name,
  value,
  onChange,
  label,
  disabled,
  required = false,
  placeholder = "",
  error = "false",
  errorMessage,
  rows = 4,
  onBlur
}) {
  return (
    <div className="w-full relative mb-6">
      {label && (
        <label 
          htmlFor={id} 
          className="text-sm text-blackDark font-medium"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={`
          w-full px-3 py-2 mt-2 
          bg-white border rounded-md 
          font-light text-sm
          transition outline-none
          disabled:opacity-70 resize-none disabled:cursor-not-allowed
          ${error === "true" 
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500" 
            : "border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
          }
        `}
      />
      {error === "true" && errorMessage && (
        <small className="text-danger relative">
          {errorMessage}
        </small>
      )}
    </div>
  );
}