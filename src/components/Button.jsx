"use client";

import React from "react";

const Button = ({
  label,
  onClick,
  disabled,
  type = "button",
  loading,
  variant = "primary",
  size = "large",
  icon,
  className = ""
}) => {
  const baseStyles =
    "relative rounded-lg transition font-semibold focus:outline-none";

  const variantStyles = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    neutral:
      "bg-white hover:bg-gray-50 text-coolGrey border border-btnInactive",
    other: "bg-transparent hover:bg-gray-100 text-coolGrey"
  };

  const sizeStyles = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-base w-full"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
        flex items-center justify-center gap-2
      `}
    >
      {icon && icon}
      {label}
      {loading && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        </div>
      )}
    </button>
  );
};

export default Button;
