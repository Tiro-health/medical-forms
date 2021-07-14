import { ChoiceInput } from "Controlled/ChoiceInput"
import { ICoding } from "FHIR"
import { IQuantity } from "FHIR/types"
import { Field, useField } from "formik"
import React from "react"

export const QuestionDate = ({ label, variableID }: { label: string, variableID: string }) => (
    <>
        <label
            htmlFor={variableID}
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
            {label}
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
            <Field
                name={variableID}
                type="date"
                placeholder="dd/mm/yyyy"
                className="field"
            />
        </div>
    </>
)
export const QuestionInteger = ({ label, variableID, placeholder, min, max }: { label: string, variableID: string, placeholder?: string, min?: number, max?: number }) => (
    <>
        <label
            htmlFor={variableID}
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
            {label}
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
            <Field
                name={variableID}
                type="number"
                placeholder={placeholder}
                step={1}
                min={min}
                max={max}
                className="field placeholder-gray-300 hide-arrows"
            />
        </div>
    </>
)
export const QuestionDecimal = ({ label, variableID, placeholder, min, max,step}: { label: string, variableID: string, placeholder?: string, min?: number, max?: number, step?:number }) => (
    <>
        <label
            htmlFor={variableID}
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
            {label}
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
            <Field
                name={variableID}
                type="number"
                placeholder={placeholder}
                step={step}
                min={min}
                max={max}
                className="field placeholder-gray-300 hide-arrows"
            />
        </div>
    </>
)
export const QuestionCoding = ({ label, variableID, options, placeholder }: { label: string, options: ICoding[], variableID: string, placeholder?: string }) => {
    const [field, , helpers] = useField<ICoding | undefined>(variableID)
    return (
        <>
            <label
                htmlFor="item[0].answer[0].valueCoding"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
                {label}
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
                <ChoiceInput
                    value={field.value}
                    onValueChange={helpers.setValue}
                    options={options}
                    placeholder={placeholder}
                    className="field placeholder-gray-300"
                />
            </div>
        </>)
}
export const QuestionMultipleChoiceRadio = ({ label, extraInfo, answerOptions, variableID }: { label: string, extraInfo?: string, answerOptions: { [label: string]: string }, variableID: string }) => {
    return (
        <>
            <div>
                <div
                    className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                >
                    {label}
                </div>
            </div>
            <div className="sm:col-span-2" >
                <div className="max-w-lg">
                    {extraInfo && (<p className="text-sm text-gray-500">{extraInfo}</p>)}
                    <div className="mt-4 space-y-4">
                        {Object.entries(answerOptions).map(
                            ([text, value]) => (
                                <div className="flex items-center" key={text}>
                                    <Field
                                        name={variableID}
                                        value={value}
                                        type="radio"
                                        className="radio"
                                    />
                                    <label htmlFor={variableID} className="ml-3 block text-sm font-medium text-gray-700">
                                        {text}
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )

}

export const QuestionQuantity = ({ variableID, placeholder, label, min, max, step }: { variableID: string, placeholder?: string, label: string, min?: number, max?: number, step?: number }) => {
    const [{ value },,{setValue}] = useField<IQuantity>(variableID)
    console.log("question quantity", variableID, value)
    return (<>
        <label
            htmlFor={variableID}
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
            {label}
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
            <div className="mt-1 relative rounded-md w-full shadow-sm ">
                <input
                    value={value.value}
                    type="number"
                    min={min}
                    step={step}
                    max={step}
                    onChange={(event)=>setValue({value:parseFloat(event.target.value), unit: value.unit})}
                    placeholder={placeholder}
                    className="field hide-arrows placeholder-gray-300"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm bg-white">{value.unit}</span>
                </div>
            </div>
        </div>
    </>)
}

export const QuestionTextArea = ({variableID, placeholder, label, min, max, step }: { variableID: string, placeholder?: string, label: string, min?: number, max?: number, step?: number }) => {
    const [{ value, onChange },] = useField<string>(variableID)

    return (<>
        <label
            htmlFor={variableID}
            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
            {label}
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2 md:col-span-1">
            <textarea
                className="field placeholder-gray-300"
                value={value}
                onChange={onChange}
            />
        </div>
    </>)
}

