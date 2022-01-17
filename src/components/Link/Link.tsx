import React from "react";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Link text
   */
  children: React.ReactNode;
  /**
   * Should the link open in a new tab?
   */
  openInNewTab: boolean;
  /**
   * Changes font-size
   * @default "medium"
   */
  size?: "medium" | "small";
}

function Link({
  children,
  href,
  openInNewTab = false,
  size = "medium",
}: LinkProps) {
  const textSize = {
    medium: "text-sm",
    small: "text-xs",
  };
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`${textSize[size]} underline underline-offset-8 transition duration-200 hover:text-nrxRed`}
    >
      {children}
    </a>
  );
}

export default Link;
