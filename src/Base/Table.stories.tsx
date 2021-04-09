import React from "react";
import { Meta, Story } from "@storybook/react";
import { Table } from "./Table";

export default {
  title: "Base/Table",
} as Meta;

const Template: Story = (args) => <Table {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Role</th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div>Jane Cooper</div>
                <div className="text-gray-500">jane.cooper@example.com</div>
              </div>
            </div>
          </td>
          <td>
            <div>Regional Paradigm Technician</div>
            <div className="text-gray-500">Optimization</div>
          </td>
          <td>
            <span className="px-2 inline-flex text-xs leading-5 font-bold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td className="text-gray-500">Admin</td>
          <td className="text-right text-sm font-medium">
            <a href="#" className="text-blue-600 hover:text-blue-900">
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </>
  ),
};
