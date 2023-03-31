import { SidebarChildProps } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useEffect, useState } from "react";

const SidebarItemChild = ({ name, icon, index, path }: SidebarChildProps) => {
  const router = useRouter();
  const [test, setTest] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTest(true);
    }, 25 * (index + 1));
  }, []);

  return (
    <Link
      className={classNames("block p-1", {
        "font-semibold": router.pathname === path,
      })}
      href={path}
    >
      <div
        className={classNames(
          "flex flex-row p-2 rounded hover:bg-slate-400 hover:text-white hover:font-semibold transition-all duration-300",
          {
            "pl-0": !test,
            "pl-5": test,
          }
        )}
      >
        {name}
      </div>
    </Link>
  );
};

export default SidebarItemChild;
