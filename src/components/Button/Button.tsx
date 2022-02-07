import React from "react";
import "./button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Component content
   */
  children: React.ReactNode;
  /**
   * Changes design and interactions
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "outlined" | "danger" | "ghost";
  /**
   * Changes padding, height and font-size
   * @default "default"
   */
  size?: "default" | "medium" | "small";
  /**
   * Prevent the user from interacting with the button: it cannot be pressed or focused
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Buttons allow users to take actions, and make choices, with a single click.
 */
function Button({
  variant = "primary",
  size = "medium",
  onClick,
  children,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
        "nrx-button",
        `nrx-button--${size}`,
        `nrx-button--${variant}`,
      ].join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
