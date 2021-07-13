import React from "react"
import { useState } from "react";
import { useCombobox, useMultipleSelection } from "downshift";
import { CheckIcon, SelectorIcon } from "./icons";
import classNames from "classnames";

export const DropdownMultipleCombobox = ({
  items,
  label = "Label:",
  onChange,
}: {
  items: string[];
  label: string;
  onChange?: (value: string[] | null) => any;
}) => {
  const [inputValue, setInputValue] = useState("");
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection<string>({
    initialSelectedItems: [],
    onSelectedItemsChange: ({ selectedItems }) =>
      onChange && onChange(selectedItems ?? null),
  });
  const getFilteredItems = (items: string[]) =>
    items.filter(
      (item: string) =>
        selectedItems.indexOf(item) < 0 &&
        item.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useCombobox<string | null>({
    inputValue,
    items: getFilteredItems(items),
    onStateChange: ({
      inputValue,
      type,
      selectedItem,
    }: {
      inputValue?: string;
      type: any;
      selectedItem?: string | null;
    }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue as string);
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue("");
            addSelectedItem(selectedItem);
            selectItem(null);
          }

          break;
        default:
          break;
      }
    },
    defaultHighlightedIndex: 0,
  });
  return (
    <div>
      <label
        {...getLabelProps()}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative">
        <div className="flex flex-wrap rounded-md shadow-sm focus-within:ring-1 border-1 border focus:outline-none border-gray-300 focus-within:ring-blue-200 focus-within:border-blue-300 text-base sm:text-sm bg-white px-2 py-2">
          {selectedItems.map((selectedItem, index) => (
            <span
              className="inline-flex items-center py-0.5 pl-2 pr-0.5 ml-1 my-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700"
              key={`selected-item-${index}`}
              {...getSelectedItemProps({ selectedItem, index })}
            >
              {selectedItem}
              <button
                type="button"
                className="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none focus:bg-blue-500 focus:text-white"
              >
                <span onClick={() => removeSelectedItem(selectedItem)}>
                  &#10005;
                </span>
              </button>
            </span>
          ))}
          <span {...getComboboxProps()} className="ml-1 my-0.5 flex-1">
            <input
              type="text"
              className="p-0 w-full border-0 focus:border-0 focus:ring-0"
              {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
            />
            <button
              {...getToggleButtonProps()}
              aria-label={"toggle menu"}
              className="absolute inset-y-0 right-0 flex items-center pr-2 pointers-events-none"
            >
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </span>
        </div>
        <ul
          {...getMenuProps()}
          className={classNames(
            "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",
            { hidden: !isOpen, visible: isOpen }
          )}
        >
          {isOpen &&
            getFilteredItems(items).map((item, index) => (
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
    </div>
  );
};
