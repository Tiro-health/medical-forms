import React from "react";

export const Label = ({ children, htmlFor, text }: React.PropsWithChildren<{ htmlFor: string, text?: string }>) => (
    <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
    >
        {text ?? children}
    </label>

)