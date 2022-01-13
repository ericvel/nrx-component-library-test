import React, { useEffect, useRef, useState } from "react";
import _uniqueId from "lodash/uniqueId";

export default function Dropdown({ children, title }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdownRef = useRef();

  const handleClickOutside = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleClickInside = () => {
    setIsExpanded(!isExpanded);
  };

  // Generate unique ID for each component instance in the DOM
  const [dropdownItemsId, setDropdownItemsId] = useState();

  useEffect(() => {
    // Set only on first render to avoid generating new IDs for existing instance
    setDropdownItemsId(_uniqueId("dropdown-items-"));
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        className="justify-center truncate max-w-[180px] px-4 py-2 bg-nrxRed font-medium text-white"
        onClick={handleClickInside}
        aria-expanded={isExpanded}
        aria-controls={dropdownItemsId}
      >
        {title}
      </button>
      {isExpanded ? (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 shadow-lg bg-white divide-y"
          id={dropdownItemsId}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
