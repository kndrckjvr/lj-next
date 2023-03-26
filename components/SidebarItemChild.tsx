import { SidebarChildProps } from "@/types/types";
import Link from "next/link";

const SidebarItemChild = ({ name, path }: SidebarChildProps) => {
  return (
    <Link className="flex flex-row ml-4 mb-4" href={path}>
      {name}
    </Link>
  );
};

export default SidebarItemChild;
