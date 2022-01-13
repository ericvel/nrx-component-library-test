import React from "react";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Link text
   */
  children: React.ReactNode;
}

export default function Link({ children, href }: LinkProps) {
  return (
    <a
      href={href}
      className="underline underline-offset-8 transition duration-200 hover:text-nrxRed"
    >
      {children}
    </a>
  );
}
