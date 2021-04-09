import React from 'react';
import "./SectionPanel.css"
export interface ISectionPanel {
  description: JSX.Element | string;
}

export const SectionPanel: React.FunctionComponent<ISectionPanel> = ({
  description,
  children,
}) => {
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-6 bg-primary">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0 section-panel-desc">{description}</div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">{children}</div>
      </div>
    </>
  );
};

