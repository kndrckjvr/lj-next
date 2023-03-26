import { SidebarProps } from "@/types/types";
import Link from "next/link";
import AppIcon from "./AppIcon";
import React, { useRef } from "react";
import classNames from "classnames";
import styles from "@/styles/Sidebar.module.css";
import { useRouter } from "next/router";

const SidebarItem = ({
  name,
  icon,
  path,
  isParent,
  children,
}: SidebarProps) => {
  const childCount = React.Children.count(children);
  let isContentClose = true;

  const childReference = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleAnimateChild = () => {
    if (childReference?.current === null) {
      return;
    }

    let { current } = childReference;

    current.style.maxHeight = isContentClose
      ? `${current.scrollHeight}px`
      : "0px";
    isContentClose = !isContentClose;
  };

  return (
    <div>
      {isParent ? (
        <div
          className="flex flex-row p-4 cursor-pointer hover:bg-slate-300 transition-all duration-300"
          onClick={handleAnimateChild}
        >
          <AppIcon name={icon} className="mr-3" />
          {name}
        </div>
      ) : (
        <Link
          href={path}
          className="flex flex-row p-4 hover:bg-slate-300 transition-all duration-300"
        >
          <AppIcon name={icon} className="mr-3" />
          {name}
        </Link>
      )}
      <div
        className={classNames(styles.SidebarItemChild, "bg-slate-100", {
          hidden: childCount === 0,
        })}
        ref={childReference}
      >
        <div className="flex flex-col pt-4">{children}</div>
      </div>
    </div>
  );
};

export default SidebarItem;
