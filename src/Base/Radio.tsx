import React from "react";
import classNames from "classnames";

export interface IRadioProps extends Omit<React.HTMLProps<HTMLInputElement>, "size"> {
  label: string;
  size?: "small" | "medium" | "large";
}

export const Radio = ({
  label,
  size = "small",
  ...radioProps
  
}: IRadioProps) => {
  return (
    <div className="flex items-center">
        <input
          type="radio"
          className={classNames("focus:ring-blue-500 text-blue-600 border-gray-300", {"h-4 w-4": size === "small", "h-6 w-6": size === "medium", "h-8 w-8": size === "large"})}
          {...radioProps}
        />
        <label
          htmlFor={radioProps.name}
          className={classNames("font-medium text-gray-700 block", {"text-sm ml-2": size==="small", "text-lg ml-3": size==="medium", "text-xl ml-4": size==="large"})}
        >
          {label}
        </label>
    </div>
  );
};
