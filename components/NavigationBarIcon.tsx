import { NavigationBarIconProps } from "@/types/types";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import AppIcon from "./AppIcon";

const NavigationBarIcon = ({
  icon,
  badge,
  badgeColor,
  children,
  dropdownClassName,
}: NavigationBarIconProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="md:mr-2 p-[8px] relative" ref={dropdownRef}>
      <div
        className="p-[8px] cursor-pointer rounded hover:bg-slate-500 hover:text-white transition duration-200 ease-in"
        onClick={() => {
          setDropdownOpen(!isDropdownOpen);
        }}
      >
        <AppIcon name={icon} />
        <span
          className={classNames(
            "absolute bottom-1 right-0 bg-red-900 rounded-full align-middle text-center text-white text-xs w-5 h-5 leading-5",
            {
              hidden: badge === undefined,
            },
            badgeColor
          )}
        >
          {badge}
        </span>
      </div>
      <div
        id="dropdown"
        className={classNames(
          "z-10 absolute right-0 top-16 bg-white divide-y divide-gray-100 rounded-lg shadow",
          dropdownClassName,
          {
            hidden: !isDropdownOpen,
            block: isDropdownOpen,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default NavigationBarIcon;
