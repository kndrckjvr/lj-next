import { FormInputProps } from "@/types/types";
import classNames from "classnames";

const FormInput = ({
  name,
  labelText,
  labelClass,
  value,
  placeholder,
  type = "text",
  errorMessage,
  onChange,
}: FormInputProps) => {
  return (
    <>
      <div className={classNames("mb-3", labelClass)}>
        <label htmlFor={name}>{labelText}</label>
        <input
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className={classNames("w-full border-2 rounded h-10 px-2", {
            "border-red-600": errorMessage?.length,
            "border-slate-400": !errorMessage?.length,
          })}
        />
        <span className="text-red-600 font-semibold">{errorMessage}</span>
      </div>
    </>
  );
};

export default FormInput;
