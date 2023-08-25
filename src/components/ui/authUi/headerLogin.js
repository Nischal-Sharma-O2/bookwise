import React from "react";
import logo from "../../../assets/logo.png"

export default function LoginHeader(props) {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-28 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {props.title}
        </h2>
      </div>
    </>
  );
}
