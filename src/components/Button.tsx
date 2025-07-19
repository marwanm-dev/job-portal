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
    variantClasses =
      "bg-b5 text-white border border-b5 hover:bg-transparent hover:text-b5 hover:border-b5";
  } else if (variant === "ghost") {
    variantClasses = "bg-transparent text-b5 hover:text-b5/80";
  } else if (variant === "outline") {
    variantClasses =
      "bg-transparent border border-b5 text-b5 hover:bg-b5 hover:text-white hover:border-b5";
  }

  return <button className={`${variantClasses} ${className}`} {...props} />;
}
