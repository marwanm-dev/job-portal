import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  color?: string;
}

export default function Button({
  variant = "primary",
  color = "b5",
  className = "",
  ...props
}: ButtonProps) {
  let variantClasses = "";

  if (variant === "primary") {
    variantClasses = `bg-${color} text-white border border-${color} hover:bg-transparent hover:text-${color} hover:border-${color}`;
  } else if (variant === "ghost") {
    variantClasses = `bg-transparent text-${color} hover:text-${color}/80`;
  } else if (variant === "outline") {
    variantClasses = `bg-transparent border border-${color} text-${color} hover:bg-${color} hover:text-white hover:border-${color}`;
  }

  return <button className={`${variantClasses} ${className}`} {...props} />;
}
