import React from "react";
import "./InputGroup.css"

export interface IInputGroupProps extends React.HTMLProps<HTMLFieldSetElement> {
  label?: string;
  description?: string;
}
export const InputGroup: React.FunctionComponent<IInputGroupProps> = ({
  children,
   label,
   description,
  ...fieldSetProps
}) => {
  return (
    <fieldset {...fieldSetProps}>
      {label && (<legend className="text-base font-medium text-gray-700">{label}</legend>)}
      {description && (<p className="text-sm text-gray-500">{description}</p>)}
      <div className="mt-1 flex items-stretch input-group">
        {children}
      </div>
    </fieldset>
  );
};
