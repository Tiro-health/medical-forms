import React from "react";
type ValidationStatus = "valid" | "invalid" | "required" | "";

export interface ISelectProps extends React.HTMLProps<HTMLSelectElement> {
  label?: string;
  defaultEmpty?: boolean;
  emptyText?: string;
  options: string[];
  status?: ValidationStatus
}

export const Select = React.forwardRef<HTMLSelectElement,ISelectProps>((props, ref) => {
  const {
    label,
    options,
    defaultEmpty=true,
    emptyText="",
    className,
    status,
    ...selectProps
  } = props;
  return (
    <div className={className}>
    {label && (<label htmlFor={selectProps.name} className="block text-sm font-medium text-gray-700">{label}</label>)}
    <select ref={ref}  name={selectProps.name} defaultValue={defaultEmpty ? emptyText : undefined} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" {...selectProps} >
      {defaultEmpty && (<option disabled>{emptyText}</option>)}
      {options.map(option=><option key={option}>{option}</option>)}
    </select>
  </div> 
  );
});
