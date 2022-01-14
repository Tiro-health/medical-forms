import classNames from "classnames";
import React, { HTMLAttributes } from "react";

export const QuestionWrapper = ({ children, className, ...attributes }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={classNames("sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5", className)}>
            {children}
        </div>
    )
}