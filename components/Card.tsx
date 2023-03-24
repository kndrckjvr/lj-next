import { PropsWithChildren } from "react";

const Card = (props: PropsWithChildren) => {
  return (
    <div className="bg-white m-2 rounded w-full p-4">{props.children}</div>
  );
};

export default Card;
