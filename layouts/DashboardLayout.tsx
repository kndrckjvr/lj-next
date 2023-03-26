import NavigationBar from "@/components/NavigationBar";
import Sidebar from "@/components/Sidebar";
import { PropsWithChildren } from "react";

const DashboardLayout = (props: PropsWithChildren) => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-hidden">
        <nav className="bg-gray-800 fixed">
          <NavigationBar></NavigationBar>
        </nav>
        <div className="flex flex-row flex-grow">
          <div className="bg-white w-64 max-md:hidden pt-16">
            <Sidebar></Sidebar>
          </div>
          <div className="flex-grow overflow-y-auto overflow-x-hidden max-h-screen pt-16 pr-4">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
