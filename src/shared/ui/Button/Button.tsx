import { cn } from "@/shared/lib";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonForm = "rounded" | "pill" | "circle";
type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outlined"
  | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  form?: ButtonForm;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    size = "sm",
    variant = "primary",
    form = "pill",
    disabled = false,
    ...rest
  } = props;
  return (
    <button
      {...rest}
      disabled={disabled}
      className={cn(
        styles.button,
        className,
        styles[size],
        styles[form],
        styles[variant],
        {
          [styles.disabled]: disabled,
        }
      )}
    >
      {children}
    </button>
  );
};
