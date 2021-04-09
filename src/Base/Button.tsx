import React, { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}
export const Button: React.FunctionComponent<IButtonProps> = ({children="Submit", type="submit", ...attributes}) => {
  return (
    <button
      type={type}
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      {...attributes}
    >
      {children}
    </button>
  );
};
