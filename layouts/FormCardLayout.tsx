import classNames from "classnames";
import styles from "@/styles/Home.module.css";
import { PropsWithChildren } from "react";

const FormCardLayout = (props: PropsWithChildren) => {
  return (
    <>
      <div
        className={"md:container mx-auto h-screen flex flex-col justify-center"}
      >
        <div
          className={classNames(
            styles.FormCardLayout,
            "w-full shadow-2xl h-auto max-md:h-screen flex flex-col"
          )}
        >
          <div className="flex flex-row max-md:flex-col max-md:mb-10">{props.children}</div>
          <div className="max-md:flex-1"></div>
          <div className="bg-pickled-bluewood-900 text-pickled-bluewood-50 p-4 flex flex-row justify-end max-md:w-full">
            <div className="flex flex-col uppercase text-xs">
              <span>Smart Monitoring and Control System (V5.3)</span>
              <span>Copyright © 2023 Lingjack Digital Pte Ltd.</span>
              <span>All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCardLayout;
