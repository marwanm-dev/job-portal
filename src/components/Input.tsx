import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type Variant = "primary" | "outline";

interface CommonProps {
  variant?: Variant;
  isTextarea?: boolean;
  className?: string;
}

type InputProps = CommonProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = CommonProps & TextareaHTMLAttributes<HTMLTextAreaElement>;
type Props = InputProps | TextareaProps;

const colorClasses: Record<Variant, string> = {
  primary:
    "p-4 rounded-md bg-white border border-gray3 placeholder-gray focus:border-blue",
  outline:
    "px-5 py-3 font-light rounded-full bg-transparent border-white/60 text-sm placeholder-white/60 focus:placeholder-white focus:border-white focus:text-white",
};

export default function Input(props: Props) {
  const {
    variant = "primary",
    isTextarea = false,
    className = "",
    ...rest
  } = props;

  const classes = `${colorClasses[variant]} ${className}`.trim();

  return isTextarea ? (
    <textarea className={classes} {...(rest as TextareaProps)} />
  ) : (
    <input className={classes} {...(rest as InputProps)} />
  );
}
