import React from "react";
import "./Table.css";

export const Table: React.FunctionComponent<
  React.HTMLProps<HTMLTableElement>
> = ({ children }) => {
  /** sm:rounded-lg doesn't work */
  return (
    <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 table">
        {children}
      </table>
    </div>
  );
};
