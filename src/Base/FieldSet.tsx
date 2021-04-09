import React from "react";

export interface IFieldSetProps extends React.HTMLProps<HTMLFieldSetElement>{
    label: string;
    description?: string;
}

export type IFieldSetRefProps = React.PropsWithoutRef<IFieldSetProps> & React.RefAttributes<HTMLFieldSetElement>

export const FieldSet = React.forwardRef<HTMLFieldSetElement,IFieldSetProps>(({label, className, description, children, ...fieldsetProps}, ref) => {
  return (
    <fieldset ref={ref} className={className} {...fieldsetProps}>
      <legend className="text-base font-medium text-gray-700">{label}</legend>
      {description && (<p className="text-sm text-gray-500">{description}</p>)}
      <div className="mt-2 space-y-4">
       {children} 
      </div>
    </fieldset>
  );
});
