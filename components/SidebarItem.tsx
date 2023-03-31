import { SidebarItemProps } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "@/styles/Sidebar.module.css";
import { AppIcon } from ".";
import { useRouter } from "next/router";

const SidebarItem = ({
  name,
  icon,
  path,
  isParent,
  child,
  children,
}: SidebarItemProps) => {
  const childCount = React.Children.count(children);
  const [isContentOpen, setContentOpen] = useState(false);

  const childReference = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleContent = (content?: boolean) => {
    if (childReference?.current === null) {
      return;
    }

    let { style, scrollHeight } = childReference.current;

    if (content === true) {
      style.maxHeight = `${scrollHeight}px`;
    } else if (content === false) {
      style.maxHeight = "0px";
    } else {
      style.maxHeight = !isContentOpen ? `${scrollHeight}px` : "0px";
    }

    setContentOpen(content === undefined ? !isContentOpen : content);
  };

  useEffect(() => {
    if (child?.map((e) => e.path).includes(router.pathname)) {
      toggleContent(true);
    }
  }, []);

  return (
    <div className="text-sm">
      {isParent ? (
        <div className="p-1 cursor-pointer" onClick={() => toggleContent()}>
          <div className="flex flex-row p-2 justify-between rounded hover:bg-slate-300 transition-all duration-300">
            <div className="flex flex-row">
              <AppIcon size={20} name={icon} className="mr-3" />
              {name}
            </div>
            <div>
              <AppIcon
                size={20}
                name={isContentOpen ? "ChevronUp" : "ChevronDown"}
              />
            </div>
          </div>
        </div>
      ) : (
        <Link href={path} className="p-1 block">
          <div className="flex flex-row p-2 rounded hover:bg-slate-300 transition-all duration-300">
            <AppIcon size={20} name={icon} className="mr-3" />
            {name}
          </div>
        </Link>
      )}
      {childCount > 0 && (
        <div
          className={classNames(styles.SidebarItemChild, "bg-slate-300", {
            hidden: childCount === 0,
          })}
          ref={childReference}
        >
          <div className="flex flex-col">{children}</div>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
