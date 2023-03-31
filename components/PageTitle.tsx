import { PageTitleProps } from "@/types/types";

const PageTitle = ({ pageTitle, subTitle }: PageTitleProps) => {
  return (
    <div className="ml-4 mb-5 mt-1">
      <p className="uppercase text-xs tracking-widest">
        {subTitle ?? "DASHBOARD"}
      </p>
      <h1 className="text-2xl font-semibold leading-5 text-pickled-bluewood-800">
        {pageTitle}
      </h1>
    </div>
  );
};

export default PageTitle;
