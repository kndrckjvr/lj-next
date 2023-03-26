import Image from "next/image";
import classNames from "classnames";
import * as Icon from "react-feather";
import AppIcon from "./AppIcon";

const NavigationBar = () => {
  return (
    <>
      <div className="bg-white flex flex-row shadow-md w-screen">
        <div className="flex flex-row items-center justify-center w-64 max-md:hidden">
          <Image
            src="/lingjack_login.png"
            alt="Lingjack Digital Logo"
            className={classNames("mr-2 w-8")}
            width={400}
            height={400}
            priority
          />
          <h1 className="font-bold text-pickled-bluewood-800 uppercase text-sm">
            Lingjack Digital
          </h1>
        </div>
        <div className="flex flex-row items-center justify-between py-[16px] flex-grow">
          <div className="flex flex-row items-center">
            <AppIcon name="Menu" className="ml-5 md:mr-10 mr-5" />
            <h1 className="font-semibold md:text-lg text-xs">
              Smart Water Pump Dashboard
            </h1>
          </div>
          <div className="flex flex-row">
            <AppIcon name="HardDrive" className="md:mr-10 mr-5" />
            <AppIcon name="Bell" className="md:mr-10 mr-5" />
            <AppIcon name="User" className="md:mr-10 mr-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
