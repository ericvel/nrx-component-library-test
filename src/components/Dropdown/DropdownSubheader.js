import React from "react";

export default function DropdownSubheader({ children }) {
  return (
    <h2 className={`inline-block w-full px-4 py-2 font-bold text-sm`}>
      {children}
    </h2>
  );
}
