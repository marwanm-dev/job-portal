import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  color?: "b5" | "y5";
}

const colorClasses: Record<
  NonNullable<ButtonProps["color"]>,
  Record<NonNullable<ButtonProps["variant"]>, string>
> = {
  b5: {
    primary:
      "bg-b5 text-white border border-b5 hover:bg-transparent hover:text-b5 hover:border-b5",
    ghost: "bg-transparent text-b5 hover:text-b5/80",
    outline:
      "bg-transparent border border-b5 text-b5 hover:bg-b5 hover:text-white hover:border-b5",
  },
  y5: {
    primary:
      "bg-y5 text-white border border-y5 hover:bg-transparent hover:text-y5 hover:border-y5",
    ghost: "bg-transparent text-y5 hover:text-y5/80",
    outline:
      "bg-transparent border border-y5 text-y5 hover:bg-y5 hover:text-white hover:border-y5",
  },
};

export default function Button({
  variant = "primary",
  color = "b5",
  className = "",
  ...props
}: ButtonProps) {
  const variantClasses = colorClasses[color]?.[variant] || "";

  return <button className={`${variantClasses} ${className}`} {...props} />;
}
