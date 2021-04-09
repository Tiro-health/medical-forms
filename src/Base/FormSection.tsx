import { Button } from "./Button";
import React, { useState } from "react";

export interface IFormSectionProps extends React.HTMLProps<HTMLFormElement> {}

export const FormSection: React.FunctionComponent<IFormSectionProps> = ({
  children,
  onSubmit,
  ...formProps
}) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    onSubmit && onSubmit(event)
    setIsSubmitted(true)
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} {...formProps}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">{children}</div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          {isSubmitted && (<i className="fas fa-check text-green-500 px-3 text-xl align-bottom"/>)}
          <span className="inline-flex rounded-md shadow-sm">
            <Button/>
          </span>
        </div>
      </div>
    </form>
  );
};
