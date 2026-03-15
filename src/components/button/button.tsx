"use client";

import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "link" | "cta";
}

const baseStyles = {
  height: "var(--height-md)",
  borderRadius: "var(--radius-md)",
  fontSize: "1rem",
  fontWeight: 600,
  color: "#ffffff",
  cursor: "pointer",
  transition: "opacity 0.2s ease",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 14px",
};

const variantStyles = {
  link: {
    background: "transparent",
    border: "1px solid rgba(255, 255, 255, 0.5)",
  },
  cta: {
    background: "var(--color-accent)",
    border: "none",
    width: "100%",
  },
};

export const Button = ({
  variant,
  children,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <button
      {...props}
      disabled={disabled}
      onClick={handleClick}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        width: variant === "cta" ? "100%" : "auto",
        opacity: disabled ? 0.5 : variant === "link" ? 1 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      className={`
        ${variant === "link" ? "hover:opacity-80" : "hover:opacity-90"}
        disabled:cursor-not-allowed disabled:hover:opacity-50
      `}
    >
      {children}
    </button>
  );
};
