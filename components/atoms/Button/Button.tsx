import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "link";
type ButtonSize = "x-small" | "small" | "medium" | "large";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  type = "button",
  onClick,
  href,
  iconLeft,
  iconRight,
}) => {
  const baseClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const buttonContent = (
    <>
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      <span className={styles.content}>{children}</span>
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </>
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {buttonContent}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={baseClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
