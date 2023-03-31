import { FormCardInnerLayoutProps } from "@/types/types";
import Image from "next/image";
import classNames from "classnames";

const FormCardInnerLayout = ({ children }: FormCardInnerLayoutProps) => {
  return (
    <>
      <div
        className={
          "flex flex-col items-center justify-center md:border-r-2 border-r-pickled-bluewood-900 md:w-2/5 md:my-20 my-10 md:mr-2"
        }
      >
        <Image
          src="/lingjack_login.png"
          alt="Lingjack Digital Logo"
          className={classNames("mb-2 md:w-3/5 max-md:w-2/5")}
          width={400}
          height={400}
          priority
        />
        <h1 className={"text-pickled-bluewood-900 font-bold lg:text-2xl"}>
          We Make IOT Work for You!
        </h1>
      </div>
      <div className={"flex flex-col justify-center md:w-3/5 px-10"}>
        {children}
      </div>
    </>
  );
};

export default FormCardInnerLayout;
