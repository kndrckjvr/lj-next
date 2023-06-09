import { CardProps } from "@/types/types";
import classNames from "classnames";

const Card = ({ className, children }: CardProps) => {
  return (
    <div className={classNames(className)}>
      <div className="m-1 p-4 bg-white rounded drop-shadow-xl">{children}</div>
    </div>
  );
};

export default Card;
