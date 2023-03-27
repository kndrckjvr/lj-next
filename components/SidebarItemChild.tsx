import { SidebarChildProps } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const SidebarItemChild = ({ name, path }: SidebarChildProps) => {
  const router = useRouter();

  return (
    <Link
      className={classNames("block p-2", {
        "font-semibold": router.pathname === path,
      })}
      href={path}
    >
      <div className="flex flex-row p-2 rounded hover:bg-slate-400 hover:text-white hover:font-semibold transition-all duration-300">
        {name}
      </div>
    </Link>
  );
};

export default SidebarItemChild;
