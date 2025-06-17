import React from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: boolean;
  disabled?: boolean;
  inputClassName?: string;
}

const Input = ({
  error = false,
  disabled = false,
  className,
  placeholder,
  inputClassName,
  ...rest
}: InputProps) => {
  const containerClassName = classNames(styles.inputContainer, className);

  const inputClassNames = classNames(styles.inputField, inputClassName, {
    [styles.disabled]: disabled,
    [styles.error]: error,
  });

  return (
    <div className={containerClassName}>
      <input
        className={inputClassNames}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
