import React from "react";
import classNames from "classnames";
export type ValidationStatus = "valid" | "invalid" | "required" | "";

type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "url"
  | "date"
  | "datetime-local"
  | "month"
  | "week"
  | "time"
  | "search"
  | "tel";
export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  type?: InputType;
  prefix?: string;
  suffix?: string;
  status?: ValidationStatus;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => {
    const {
      label,
      name,
      className,
      status,
      prefix,
      suffix,
      type = "text",
      ...inputProps
    } = props;
    return (
      <div className={className}>
        {label && (
          <label className="block" htmlFor={name}>
            <span className="text-gray-700">{label}</span>
          </label>
        )}
        <div className="mt-1 flex rounded-md shadow-sm relative">
          {status && <div className="absolute -l-100">{status}</div>}
          {prefix && (
            <span className="inline-flex items-center text-sm px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
              {prefix}
            </span>
          )}
          <input
            ref={ref}
            type={type}
            name={name}
            className={classNames(
              "block w-full flex-1 sm:text-sm focus:ring-blue-200 focus:border-blue-300 border-gray-300",
              {
                "rounded-none rounded-r-md": !!prefix && !suffix,
                "rounded-none rounded-l-md": !!suffix && !prefix,
                "rounded-md": !suffix && !prefix,
                "rounded-none": !!prefix && !!suffix,
              }
            )}
            {...inputProps}
          />
          {suffix && (
            <span className="inline-flex items-center text-sm px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500">
              {suffix}
            </span>
          )}
        </div>
      </div>
    );
  }
);
