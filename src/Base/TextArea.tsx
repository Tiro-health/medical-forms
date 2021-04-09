import React from "react";

export interface ITextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  rows?:number;
}

export const TextArea: React.FunctionComponent<ITextAreaProps> = (props) => {
  const {
    label = "Label text",
    name,
    description,
    className,
    ...attributes
  } = props;
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          name={name}
          className="hadow-sm focus:ring-blue-200 focus:border-blue-300 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
          {...attributes}
        ></textarea>
      </div>
      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};
