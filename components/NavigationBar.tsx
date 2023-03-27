import { NavigationBar } from "@/types/types";
import { AppIcon, NavigationBarIcon } from ".";

const NavigationBar = ({ onToggleSidebar }: NavigationBar) => {
  return (
    <>
      <header className="flex-shrink-0">
        <div className="bg-white flex flex-row shadow w-full">
          <div className="flex flex-row items-center justify-between flex-grow">
            <div className="flex flex-row items-center py-[16px]">
              <AppIcon
                name="Menu"
                className="ml-5 md:mr-10 mr-5 cursor-pointer"
                onClick={onToggleSidebar}
              />
              <h1 className="font-semibold md:text-lg text-xs">
                Smart Water Pump Dashboard
              </h1>
            </div>
            <div className="flex flex-row max-sm:hidden">
              <NavigationBarIcon icon="Globe" />
              <NavigationBarIcon
                icon="HardDrive"
                badge={3}
                badgeColor={"bg-green-500"}
              />
              <NavigationBarIcon
                icon="Bell"
                badge={3}
                badgeColor={"bg-red-700"}
              />
              <NavigationBarIcon icon="User" />
            </div>
            <div className="hidden max-sm:block">
              <NavigationBarIcon icon="MoreVertical" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
