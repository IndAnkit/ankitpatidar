import React from "react";

const Input = (props) => {
  let { className, inputClassName, placeholder, SufixIcon, onChange } = props;
  return (
    <div className={`border-gray border-2 rounded-md p-2 mb-2 bg-white ${className}`}>
      {SufixIcon && <SufixIcon />}
      <input placeholder={placeholder} className={`outline-none w-full ${inputClassName}`} onChange={onChange} />
    </div>
  );
};

export default Input;
