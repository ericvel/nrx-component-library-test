import React from "react";

export interface DropdownItemProps {
  /**
   * Text or element contained by item
   */
  children: string | React.ReactNode;
  /**
   * Disable clicks on item
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function DropdownItem({
  children,
  onClick,
  disabled,
}: DropdownItemProps) {
  return (
    <button
      className={`inline-block w-full text-left px-4 py-2 ${
        disabled ? "text-gray-400" : "text-black hover:bg-gray-100"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
