import React from "react";
import { InputGroup, IInputGroupProps } from "Base/InputGroup";

export interface IObservationGroupProps extends IInputGroupProps{

}

interface ObservationGroupComposition {
  Select: React.ForwardRefExoticComponent<React.PropsWithoutRef<IObservationGroupSelectProps> & React.RefAttributes<HTMLSelectElement>>
}

export const ObservationGroup:React.FunctionComponent<IObservationGroupProps> & ObservationGroupComposition = ({ children, ...observationGroupProps }) => {
  return <InputGroup {...observationGroupProps}>{children}</InputGroup>;
};
export interface IObservationGroupSelectProps
  extends React.HTMLProps<HTMLSelectElement> {
  label?: string;
  defaultEmpty?: boolean;
  emptyText?: string;
  options: string[];
}

const ObservationGroupSelect = React.forwardRef<
  HTMLSelectElement,
  IObservationGroupSelectProps
>(({ label, defaultEmpty, emptyText = "--", options, ...selectProps }, ref) => {
  return (
    <select
      ref={ref}
      name={selectProps.name}
      defaultValue={defaultEmpty ? emptyText : undefined}
      {...selectProps}
    >
      {defaultEmpty && <option disabled>{emptyText}</option>}
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
});

ObservationGroup.Select = ObservationGroupSelect;
