import { SidebarData } from "@/types/types";
import Image from "next/image";
import { SidebarItem, SidebarItemChild } from ".";
import classNames from "classnames";

const Sidebar = () => {
  const sidebarData: SidebarData[] = [
    {
      name: "Dashboard",
      icon: "Home",
      path: "/dashboard/flooddetection",
      isParent: true,
      child: [
        {
          name: "Smart Fire Extinguisher",
          path: "/dashboard/smartfireextinguisher",
          icon: "Home",
        },
        {
          name: "Smart Water Meter",
          path: "/dashboard/smartwatermeter",
          icon: "Home",
        },
        {
          name: "Smart Pump System",
          path: "/dashboard/smartpumpsystem",
          icon: "Home",
        },
        {
          name: "Flood Detection",
          path: "/dashboard/flooddetection",
          icon: "Home",
        },
      ],
    },
    {
      name: "Super Admin",
      icon: "Shield",
      path: "/dashboard/flooddetection",
      isParent: true,
      child: [
        {
          name: "Command Console",
          path: "/superadmin/commandconsole",
          icon: "Home",
        },
        {
          name: "Node Provisioning",
          path: "/superadmin/nodeprovisioning",
          icon: "Home",
        },
        {
          name: "Node Decommisioning",
          path: "/superadmin/nodedecommisioning",
          icon: "Home",
        },
        {
          name: "Firmware Update",
          path: "/superadmin/firmwareupdate",
          icon: "Home",
        },
      ],
    },
    {
      name: "Settings",
      icon: "Settings",
      path: "/settings",
      isParent: false,
      child: [],
    },
  ];

  return (
    <>
      <div className={classNames("w-64 bg-white h-screen")}>
        <div className="flex flex-row items-center justify-center w-64 py-[16px]">
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
        <div className="flex flex-col w-full">
          {sidebarData.map((sidebar, index) => (
            <SidebarItem
              name={sidebar.name}
              path={sidebar.path}
              isParent={sidebar.isParent}
              icon={sidebar.icon}
              key={index}
              child={sidebar.child}
            >
              {sidebar.child.map((child, childKey) => (
                <SidebarItemChild
                  name={child.name}
                  path={child.path}
                  key={childKey}
                />
              ))}
            </SidebarItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
