import React from "react";
import classNames from "classnames";

export interface ICheckBoxProps extends Omit<React.HTMLProps<HTMLInputElement>, "size">{
  label: string;
  description?: string;
  size?: "small" | "medium" | "large";
}

export const CheckBox = ({
  label,
  description,
  size = "small",
  ...inputProps
}: ICheckBoxProps) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          className={classNames("focus:ring-blue-500 text-blue-600 border-gray-300 rounded", {"h-4 w-4": size === "small", "h-6 w-6": size === "medium", "h-8 w-8": size === "large"})}
          {...inputProps}
        />
      </div>
      <div className={classNames({"ml-2 text-sm": size ===  "small", "ml-3 text-lg": size === "medium", "ml-4 text-xl": size === "large"})}>
        <label
          htmlFor={inputProps.name}
          className="font-medium text-gray-700"
        >
          {label}
        </label>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};
