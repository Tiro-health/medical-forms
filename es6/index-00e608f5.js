import { d as __rest, _ as __assign, b as classnames } from './index-fcec37d7.js';
import React__default, { useState } from 'react';

var Button = function (_a) {
    var _b = _a.children, children = _b === void 0 ? "Submit" : _b, _c = _a.type, type = _c === void 0 ? "submit" : _c, attributes = __rest(_a, ["children", "type"]);
    return (React__default.createElement("button", __assign({ type: type, className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" }, attributes), children));
};

var CheckBox = function (_a) {
    var label = _a.label, description = _a.description, _b = _a.size, size = _b === void 0 ? "small" : _b, inputProps = __rest(_a, ["label", "description", "size"]);
    return (React__default.createElement("div", { className: "flex items-start" },
        React__default.createElement("div", { className: "flex items-center h-5" },
            React__default.createElement("input", __assign({ type: "checkbox", className: classnames("focus:ring-blue-500 text-blue-600 border-gray-300 rounded", { "h-4 w-4": size === "small", "h-6 w-6": size === "medium", "h-8 w-8": size === "large" }) }, inputProps))),
        React__default.createElement("div", { className: classnames({ "ml-2 text-sm": size === "small", "ml-3 text-lg": size === "medium", "ml-4 text-xl": size === "large" }) },
            React__default.createElement("label", { htmlFor: inputProps.name, className: "font-medium text-gray-700" }, label),
            React__default.createElement("p", { className: "text-gray-500 text-sm" }, description))));
};

var FieldSet = React__default.forwardRef(function (_a, ref) {
    var label = _a.label, className = _a.className, description = _a.description, children = _a.children, fieldsetProps = __rest(_a, ["label", "className", "description", "children"]);
    return (React__default.createElement("fieldset", __assign({ ref: ref, className: className }, fieldsetProps),
        React__default.createElement("legend", { className: "text-base font-medium text-gray-700" }, label),
        description && (React__default.createElement("p", { className: "text-sm text-gray-500" }, description)),
        React__default.createElement("div", { className: "mt-2 space-y-4" }, children)));
});

var FormSection = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, formProps = __rest(_a, ["children", "onSubmit"]);
    var _b = useState(false), isSubmitted = _b[0], setIsSubmitted = _b[1];
    var handleSubmit = function (event) {
        onSubmit && onSubmit(event);
        setIsSubmitted(true);
        event.preventDefault();
    };
    return (React__default.createElement("form", __assign({ onSubmit: handleSubmit }, formProps),
        React__default.createElement("div", { className: "shadow sm:rounded-md sm:overflow-hidden" },
            React__default.createElement("div", { className: "px-4 py-5 bg-white space-y-6 sm:p-6" }, children),
            React__default.createElement("div", { className: "px-4 py-3 bg-gray-50 text-right sm:px-6" },
                isSubmitted && (React__default.createElement("i", { className: "fas fa-check text-green-500 px-3 text-xl align-bottom" })),
                React__default.createElement("span", { className: "inline-flex rounded-md shadow-sm" },
                    React__default.createElement(Button, null))))));
};

var Input = React__default.forwardRef(function (props, ref) {
    var label = props.label, name = props.name, className = props.className, status = props.status, prefix = props.prefix, suffix = props.suffix, _a = props.type, type = _a === void 0 ? "text" : _a, inputProps = __rest(props, ["label", "name", "className", "status", "prefix", "suffix", "type"]);
    return (React__default.createElement("div", { className: className },
        label && (React__default.createElement("label", { className: "block", htmlFor: name },
            React__default.createElement("span", { className: "text-gray-700" }, label))),
        React__default.createElement("div", { className: "mt-1 flex rounded-md shadow-sm relative" },
            status && React__default.createElement("div", { className: "absolute -l-100" }, status),
            prefix && (React__default.createElement("span", { className: "inline-flex items-center text-sm px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500" }, prefix)),
            React__default.createElement("input", __assign({ ref: ref, type: type, name: name, className: classnames("block w-full flex-1 sm:text-sm focus:ring-blue-200 focus:border-blue-300 border-gray-300", {
                    "rounded-none rounded-r-md": !!prefix && !suffix,
                    "rounded-none rounded-l-md": !!suffix && !prefix,
                    "rounded-md": !suffix && !prefix,
                    "rounded-none": !!prefix && !!suffix,
                }) }, inputProps)),
            suffix && (React__default.createElement("span", { className: "inline-flex items-center text-sm px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500" }, suffix)))));
});

var Radio = function (_a) {
    var label = _a.label, _b = _a.size, size = _b === void 0 ? "small" : _b, radioProps = __rest(_a, ["label", "size"]);
    return (React__default.createElement("div", { className: "flex items-center" },
        React__default.createElement("input", __assign({ type: "radio", className: classnames("focus:ring-blue-500 text-blue-600 border-gray-300", { "h-4 w-4": size === "small", "h-6 w-6": size === "medium", "h-8 w-8": size === "large" }) }, radioProps)),
        React__default.createElement("label", { htmlFor: radioProps.name, className: classnames("font-medium text-gray-700 block", { "text-sm ml-2": size === "small", "text-lg ml-3": size === "medium", "text-xl ml-4": size === "large" }) }, label)));
};

var Select = React__default.forwardRef(function (props, ref) {
    var label = props.label, options = props.options, _a = props.defaultEmpty, defaultEmpty = _a === void 0 ? true : _a, _b = props.emptyText, emptyText = _b === void 0 ? "" : _b, className = props.className; props.status; var selectProps = __rest(props, ["label", "options", "defaultEmpty", "emptyText", "className", "status"]);
    return (React__default.createElement("div", { className: className },
        label && (React__default.createElement("label", { htmlFor: selectProps.name, className: "block text-sm font-medium text-gray-700" }, label)),
        React__default.createElement("select", __assign({ ref: ref, name: selectProps.name, defaultValue: defaultEmpty ? emptyText : undefined, className: "mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" }, selectProps),
            defaultEmpty && (React__default.createElement("option", { disabled: true }, emptyText)),
            options.map(function (option) { return React__default.createElement("option", { key: option }, option); }))));
});

var TextArea = function (props) {
    var _a = props.label, label = _a === void 0 ? "Label text" : _a, name = props.name, description = props.description, className = props.className, attributes = __rest(props, ["label", "name", "description", "className"]);
    return (React__default.createElement("div", { className: className },
        React__default.createElement("label", { htmlFor: name, className: "block text-sm font-medium text-gray-700" }, label),
        React__default.createElement("div", { className: "mt-1" },
            React__default.createElement("textarea", __assign({ name: name, className: "hadow-sm focus:ring-blue-200 focus:border-blue-300 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" }, attributes))),
        description && (React__default.createElement("p", { className: "mt-2 text-sm text-gray-500" }, description))));
};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Button: Button,
  CheckBox: CheckBox,
  FieldSet: FieldSet,
  FormSection: FormSection,
  Input: Input,
  Radio: Radio,
  Select: Select,
  TextArea: TextArea
});

export { Button as B, CheckBox as C, FieldSet as F, Input as I, Radio as R, Select as S, TextArea as T, FormSection as a, index as i };
//# sourceMappingURL=index-00e608f5.js.map
