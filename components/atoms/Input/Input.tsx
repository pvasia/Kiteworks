import React from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: boolean;
  disabled?: boolean;
}

const Input = ({
  error = false,
  disabled = false,
  className,
  placeholder,
  ...rest
}: InputProps) => {
  const containerClassName = classNames(styles.inputContainer, className);

  const inputClassName = classNames(styles.inputField, {
    [styles.disabled]: disabled,
    [styles.error]: error,
  });

  return (
    <div className={containerClassName}>
      <input
        className={inputClassName}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
