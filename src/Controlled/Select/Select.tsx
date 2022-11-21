import React, { useState } from "react";
import classNames from "classnames";
import { ISelectItem } from "./types";
import { CheckIcon, SelectorIcon } from "./icons";
import {
  useCombobox,
  UseComboboxStateChange,
  UseComboboxStateChangeOptions,
} from "downshift";

function stateReducer(
  state: any,
  actionAndChanges: UseComboboxStateChangeOptions<string>
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
export const DropdownCombobox = ({
  items,
  label = "Label: ",
  className = "focus:ring-blue-200 focus:border-blue-300 sm:text-sm border-gray-300 rounded-md",
  containerClassname = "rounded-md shadow-sm",
  onChange,
}: {
  items: string[];
  className?: string;
  containerClassname?: string;
  label: string;
  onChange?: (value: string | null) => any;
}) => {
  const [inputItems, setInputItems] = useState(items);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    stateReducer,
    onInputValueChange: ({ inputValue }: UseComboboxStateChange<string>) => {
      setInputItems(
        items.filter((item) =>
          item.toLowerCase().startsWith(inputValue?.toLowerCase() ?? "")
        )
      );
    },
    onSelectedItemChange: ({ selectedItem }) => {
      onChange && onChange(selectedItem ?? null);
    },
    defaultHighlightedIndex: 0,
    initialHighlightedIndex: 0,
  });
  return (
    <div>
      <label {...getLabelProps()}>{label}</label>
      <div className="mt-1 relative">
        <div className={containerClassname}>
          <input
            {...getInputProps()}
            type="text"
            className={classNames("block w-full pr-10", className)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
            {...getToggleButtonProps()}
            aria-label="toggle menu"
          >
            <SelectorIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        </div>
        <ul
          {...getMenuProps()}
          className={classNames(
            "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",
            { hidden: !isOpen, visible: isOpen }
          )}
        >
          {isOpen &&
            inputItems.map((item, index) => (
              <li
                className={classNames(
                  {
                    "text-white bg-blue-600": highlightedIndex === index,
                    "text-gray-900": highlightedIndex !== index,
                  },
                  "cursor-default select-none relative py-2 pl-3 pr-9"
                )}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div >
  );
};
