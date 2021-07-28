import classNames from "classnames"
import React, { FormEventHandler } from "react"
const Footer = ({ clear }: React.PropsWithChildren<{ clear: () => any }>) => (
    <div className="pt-5">
        <div className="flex justify-end">
            <button
                type="button"
                onClick={clear}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Clear
            </button>
            <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Save
            </button>
        </div>
    </div>
)

export const FormContainer = ({ children, title, hideTitle, handleSubmit, handleClear }: React.PropsWithChildren<{ title: string, hideTitle?: boolean, handleSubmit: FormEventHandler<HTMLFormElement>, handleClear: () => any }>) => (
    <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit}>
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
                {!hideTitle && (
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {title}
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
                    </div>
                )}
                <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                    {React.Children.map(children, (c, index) => (
                        <div className={classNames("sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start",{"sm:border-t sm:border-gray-200 sm:pt-5": !hideTitle || index > 0})}>
                            {c}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer clear={handleClear} />
    </form>
)