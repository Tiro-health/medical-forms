import React from "react"
import { SelectorIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import {
  useCombobox,
  UseComboboxStateChange,
  UseComboboxStateChangeOptions,
} from "downshift";
import ReactDOM from "react-dom"
import { Dispatch, useState, RefObject, useRef } from "react";
import { DataElementInputProps } from "./types";
import { ICoding } from "FHIR/types";

function stateReducer(
  state: any,
  actionAndChanges: UseComboboxStateChangeOptions<ICoding>
) {
  const { type, changes } = actionAndChanges;
  // returning an uppercased version of the item string.
  switch (type) {
    case useCombobox.stateChangeTypes.InputChange:
      return {
        // return normal changes.
        ...changes,
        // but taking the change from default reducer and uppercasing it.
        inputValue: changes.inputValue,
      };
    // also on selection.
    case useCombobox.stateChangeTypes.ItemClick:
    case useCombobox.stateChangeTypes.InputKeyDownEnter:
    case useCombobox.stateChangeTypes.InputBlur:
      return {
        ...changes,
        // if we had an item selected.
        ...(changes.selectedItem && {
          // we will show it uppercased.
          inputValue: changes.inputValue,
        }),
      };
    default:
      return changes; // otherwise business as usual.
  }
}

interface ChoiceSelectProps extends Omit<DataElementInputProps, "editing" | "disabled" | "enabled"> {
  value: ICoding | undefined;
  options: ICoding[]
  onValueChange: Dispatch<ICoding | undefined>;
  containerRef?: RefObject<HTMLElement> | null;
}
export const ChoiceInput = ({
  value,
  name,
  className,
  options:initOptions,
  placeholder,
  onValueChange,
  containerRef,
}: ChoiceSelectProps) => {
  const [displayOptions, setDisplayOptions] = useState(initOptions);
  const {
    isOpen,
    openMenu,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox<ICoding>({
    items: initOptions,
    defaultSelectedItem: value,
    itemToString: (item) => item?.display ?? "",
    stateReducer,
    onInputValueChange: ({ inputValue }: UseComboboxStateChange<ICoding>) => {
      if(!inputValue || inputValue.length === 0){
        setDisplayOptions(initOptions)
        return
      }
      setDisplayOptions(
        initOptions.filter((option) =>
          option.display.toLowerCase().startsWith(inputValue?.toLowerCase() ?? "")
        )
      );
    },
    onSelectedItemChange: ({ selectedItem }) => {
      onValueChange && onValueChange(selectedItem ?? undefined);
      setDisplayOptions(initOptions)
    },
    defaultHighlightedIndex: 0,
    initialHighlightedIndex: 0,
  });
  const comboRef = useRef<HTMLDivElement>(null)
  const createPortal = containerRef && containerRef.current
  const comboPosition = createPortal ? comboRef.current?.getBoundingClientRect() : undefined

  const SuggestionList = (
    <ul
      {...getMenuProps()}
      className={classNames(
        "absolute w-full z-20 mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",
        { invisible: !isOpen, visible: isOpen }
      )}
      style={comboPosition}
    >
      {isOpen &&
        displayOptions.map((item, index) => (
          <li
            className={classNames(
              {
                "text-white bg-blue-600": highlightedIndex === index,
                "text-gray-900": highlightedIndex !== index,
              },
              "cursor-pointer select-none relative py-2 pl-3 pr-9"
            )}
            key={`${item}${index}`}
            {...getItemProps({ item, index })}
          >
            {item.display}
          </li>
        ))}
    </ul>
  )

  return (
    <div className="relative w-full">
      <div {...getComboboxProps()} className="w-full">
        <input
          name={name}
          {...getInputProps({
            onFocus: ()=>{
              !isOpen && openMenu()
            }
          })}
          placeholder={placeholder}
          size={
            Math.max(
              value?.display?.length ?? 0,
              placeholder?.length ?? 0
            ) + 1
          }
          type="text"
          className={classNames("block w-full", className)}
        />
        <button
          type="button"
          tabIndex={-1}
          className="absolute focus:z-20 inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
          {...getToggleButtonProps()}
          aria-label="toggle menu"
        >
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>
      {containerRef && containerRef.current ? ReactDOM.createPortal(SuggestionList, containerRef.current) : SuggestionList}
    </div>
  );
};