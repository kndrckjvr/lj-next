import NavigationBar from "@/components/NavigationBar";
import Sidebar from "@/components/Sidebar";
import { DashboardProps } from "@/types/types";
import classNames from "classnames";
import { useState } from "react";

const DashboardLayout = ({ className, children }: DashboardProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div
          className={classNames(
            "fixed z-20 inset-y-0 left-0 w-64 transition duration-300 ease-linear transform",
            {
              "translate-x-0": isSidebarOpen,
              "-translate-x-full": !isSidebarOpen,
            }
          )}
        >
          <Sidebar />
        </div>
        <div
          className={`${
            isSidebarOpen
              ? "opacity-0 pointer-events-none max-md:opacity-50 max-md:pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } fixed inset-0 z-10 bg-black transition-opacity duration-300`}
          onClick={toggleSidebar}
        />
        <div
          className={classNames(
            "flex flex-col flex-grow overflow-hidden transition-all duration-300 ease-linear transform",
            {
              "md:ml-64": isSidebarOpen,
              "ml-0": !isSidebarOpen,
            }
          )}
        >
          <NavigationBar onToggleSidebar={toggleSidebar} />
          <main
            className={classNames(
              "overflow-x-hidden overflow-y-auto bg-gray-100 p-2 flex-grow",
              className
            )}
          >
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
