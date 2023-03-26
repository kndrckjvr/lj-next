import { SidebarData } from "@/types/types";
import AppIcon from "./AppIcon";
import SidebarItem from "./SidebarItem";
import SidebarItemChild from "./SidebarItemChild";

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
          path: "/dashboard/flooddetection",
          icon: "Home",
        },
        {
          name: "Smart Water Meter",
          path: "/dashboard/flooddetection",
          icon: "Home",
        },
        {
          name: "Smart Pump System",
          path: "/dashboard/flooddetection",
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
      name: "Settings",
      icon: "Settings",
      path: "/settings",
      isParent: false,
      child: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full">
        {sidebarData.map((sidebar, index) => (
          <SidebarItem
            name={sidebar.name}
            path={sidebar.path}
            isParent={sidebar.isParent}
            icon={sidebar.icon}
            key={index}
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
    </>
  );
};

export default Sidebar;
