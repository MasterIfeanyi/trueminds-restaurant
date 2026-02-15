import search from "@/assets/search.svg";

const Input = ({
  id,
  label,
  type = "text",
  disabled,
  placeholder = "",
  required = false,
  showText = "show",
  showAction,
  error = false,
  errorMessage,
  value,
  single = true,
  onChange,
  searchInput = false,
  className = "",
  ...rest
}) => {
  return (
    <div className={`w-full relative ${single ? "mb-4" : ""}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm text-blackDark font-medium"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        data-error={error}
        value={value}
        onChange={onChange}
        {...rest}
        className={`w-full px-4 py-2 h-10 text-sm font-light mt-2 bg-white border rounded outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-grey focus:border-primary ${className}`}
      />

      {showAction && (
        <small
          className={`absolute right-3 ${
            error === "true" ? "bottom-9" : "bottom-3"
          } cursor-pointer text-primary`}
          onClick={showAction}
        >
          {showText}
        </small>
      )}

      {searchInput && (
        <img
          src={search}
          alt="search"
          className="absolute right-3 bottom-2 w-6 h-6"
        />
      )}

      {error && (
        <small className="text-danger relative">
          {errorMessage}
        </small>
      )}
    </div>
  );
};

export default Input;
