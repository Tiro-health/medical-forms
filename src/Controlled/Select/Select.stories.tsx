import { Story } from "@storybook/react";

import { DropdownMultipleCombobox } from "./MultiSelect";
import { DropdownCombobox } from "./Select";
export default {
  title: "Components/Controlled/MultiSelect",
};

const items = [
  "Neptunium",
  "Plutonium",
  "Americium",
  "Curium",
  "Berkelium",
  "Californium",
  "Einsteinium",
  "Fermium",
  "Mendelevium",
  "Nobelium",
  "Lawrencium",
  "Rutherfordium",
  "Dubnium",
  "Seaborgium",
  "Bohrium",
  "Hassium",
  "Meitnerium",
  "Darmstadtium",
  "Roentgenium",
  "Copernicium",
  "Nihonium",
  "Flerovium",
  "Moscovium",
  "Livermorium",
  "Tennessine",
  "Oganesson",
];
export const MultiSelect = () => {
  return (
    <div className="flex-col mt-12">
      <h1 className="text-center">Multi-selection example</h1>
      <DropdownMultipleCombobox items={items} label="Choose an element:" />
    </div>
  );
};

export const SingleSelect = () => {
  return (
    <div className="flex-col mt-12">
      <h1 className="text-center">Single-selection example</h1>
      <DropdownCombobox items={items} label="Choose an element:" />
    </div>
  );
};
