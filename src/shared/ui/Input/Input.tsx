import { useState, type InputHTMLAttributes, type ReactNode } from "react";
import ShowIcon from "@/shared/assets/icons/Show.svg?react";
import HideIcon from "@/shared/assets/icons/Hide.svg?react";
import styles from "./Input.module.scss";
import { cn } from "@/shared/lib";
import { Button } from "../Button/Button";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  disabled?: boolean;
  rounded?: boolean;
  Icon?: ReactNode;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(false);

  const {
    className,
    value,
    onChange,
    Icon,
    disabled = false,
    rounded = false,
    type = "text",
    ...rest
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <div
      className={cn(styles.inputContainer, className, {
        [styles.disabled]: disabled,
        [styles.rounded]: rounded,
        [styles.focus]: focus,
      })}
    >
      {Icon}
      <input
        {...rest}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        type={showPassword && type === "password" ? "text" : type}
        disabled={disabled}
        onChange={handleChange}
        className={cn(styles.input, {
          [styles.disabled]: disabled,
        })}
      />
      {type === "password" && (
        <Button
          variant="ghost"
          type="button"
          className={styles.toggleVisibility}
          onClick={toggleShowPassword}
        >
          {showPassword ? <HideIcon /> : <ShowIcon />}
        </Button>
      )}
    </div>
  );
};
