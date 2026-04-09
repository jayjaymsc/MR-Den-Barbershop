import Link from "next/link";
import React from "react";
import "./components.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href?: string;
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseClass = "custom-button label-sm";
  const variantClass =
    variant === "primary"
      ? "btn-primary gilded-gradient"
      : "btn-secondary ghost-border";
  const classes = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
