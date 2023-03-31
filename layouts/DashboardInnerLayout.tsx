import { DashboardInnerLayoutProps } from "@/types/types";

const DashboardInnerLayout = ({ children }: DashboardInnerLayoutProps) => {
  return (
    <>
      <div className={"flex flex-row flex-wrap"}>{children}</div>
    </>
  );
};

export default DashboardInnerLayout;
