import {
  GatewayLayout,
  MobileDropdownLayout,
  NotificationLayout,
  TranslationLayout,
  UserDropdownLayout,
} from "@/layouts";
import { NavigationBar } from "@/types/types";
import { AppIcon, NavigationBarIcon } from ".";

const NavigationBar = ({ onToggleSidebar }: NavigationBar) => {
  return (
    <>
      <header className="flex-shrink-0 z-10">
        <div className="bg-white flex flex-row drop-shadow-md w-full">
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
              <NavigationBarIcon icon="Globe" dropdownClassName="w-44 right-auto">
                <TranslationLayout />
              </NavigationBarIcon>
              <NavigationBarIcon
                icon="HardDrive"
                badge={10}
                badgeColor={"bg-green-600"}
                dropdownClassName="w-96 max-h-60 overflow-y-auto"
              >
                <GatewayLayout />
              </NavigationBarIcon>
              <NavigationBarIcon
                icon="Bell"
                badge={10}
                badgeColor={"bg-red-700"}
                dropdownClassName="w-96 max-h-60 overflow-y-auto"
              >
                <NotificationLayout />
              </NavigationBarIcon>
              <NavigationBarIcon icon="User" dropdownClassName="w-44">
                <UserDropdownLayout />
              </NavigationBarIcon>
            </div>
            <div className="hidden max-sm:block">
              <NavigationBarIcon icon="MoreVertical" dropdownClassName="w-44">
                <MobileDropdownLayout />
              </NavigationBarIcon>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
