import React from "react";

type Props = {
  label: string;
  placeholder: string;
  fieldName: keyof any;
  valueRef: React.MutableRefObject<any>;
};

export const Input = ({ label, placeholder, fieldName, valueRef }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    valueRef.current[fieldName] = event.target.value; 
  };
  return (
    <div className="input__container">
      <label>{label}</label>
      <input
        className="input"
        defaultValue={valueRef.current[fieldName] || ""}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
