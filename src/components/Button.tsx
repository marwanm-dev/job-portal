import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
}
export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  let variantClasses = "";

  if (variant === "primary") {
    variantClasses = "bg-b5 text-white hover:bg-b5/90";
  } else if (variant === "ghost") {
    variantClasses = "text-b5 hover:text-b5/80 bg-transparent";
  } else if (variant === "outline") {
    variantClasses = "border border-b5 text-b5 hover:border-b5/80";
  }

  const base = "text-sm rounded-full px-6 py-2 transition-colors";

  return (
    <button className={`${base} ${variantClasses} ${className}`} {...props} />
  );
}
