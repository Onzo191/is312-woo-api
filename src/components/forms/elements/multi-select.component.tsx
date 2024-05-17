import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

type InputProps = {
  loading: boolean;
  label: string;
  onChange: (name: string, value: any) => void;
  value: any;
  options: any[];
  isMulti?: boolean;
  closeMenuOnSelect?: boolean;
  required?: boolean;
};

const MultiSelect: React.FC<InputProps> = ({
  loading,
  label,
  onChange,
  value,
  options,
  isMulti = false,
  closeMenuOnSelect = false,
  required = false,
}) => {
  const handleChange = (selectedOption: any[]) => {
    onChange("categories", selectedOption);
  };

  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
        {required && <span className="text-meta-1">*</span>}
      </label>
      <Select
        // className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        styles={{
          control: (provided, state) => ({
            ...provided,
            width: "100%",
            borderRadius: "0.25rem",
            borderWidth: "1.35px",
            borderColor: state.isFocused ? "#2563EB" : "#E5E7EB",
            backgroundColor: "transparent",
            padding: "0.35rem 1rem",
            color: "#000",
            outline: "none", // outline-none
            transition: "border-color 0.3s", // transition
            "&:hover": {
              borderColor: "#2563EB", // focus:border-primary
            },
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: "white", // bg-white
          }),
        }}
        closeMenuOnSelect={false}
        options={options}
        isMulti={isMulti}
        value={value}
        onChange={handleChange}
        components={animatedComponents}
        placeholder={loading ? "Fetching..." : "Select..."}
      />
    </>
  );
};
export default MultiSelect;
