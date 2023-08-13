import React from "react";

export default function InputField(props) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor={props.htmlFor}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {props.label}
          </label>
          <div className="text-sm">
            <a
              href="/"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {props.option}
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id={props.id}
            name={props.name}
            type={props.type}
            autoComplete={props.autoComplete}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
}
