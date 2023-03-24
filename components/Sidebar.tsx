import Image from "next/image";
import classNames from "classnames";
import * as Icon from "react-feather";

const Sidebar = () => {
  return (
    <>
      <ul>
        <li className="flex flex-row p-4">
          <Icon.Home className="mr-3" />
          Dashboard
        </li>
        <li className="flex flex-row p-4">
          <Icon.Home className="mr-3" />
          Dashboard
        </li>
        <li className="flex flex-row p-4">
          <Icon.Home className="mr-3" />
          Dashboard
        </li>
        <li className="flex flex-row p-4">
          <Icon.Home className="mr-3" />
          Dashboard
        </li>
        <li className="flex flex-row p-4">
          <Icon.Home className="mr-3" />
          Dashboard
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
