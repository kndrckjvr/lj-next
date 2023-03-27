import { NavigationBarIconProps } from "@/types/types";
import classNames from "classnames";
import AppIcon from "./AppIcon";

const NavigationBarIcon = ({
  icon,
  badge,
  badgeColor,
}: NavigationBarIconProps) => {
  return (
    <div className="md:mr-2 p-[8px] relative">
      <div className="p-[8px] cursor-pointer rounded hover:bg-slate-500 hover:text-white transition duration-200 ease-in">
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
    </div>
  );
};

export default NavigationBarIcon;
