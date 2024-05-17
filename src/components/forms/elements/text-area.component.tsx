import React from "react";

type InputProps = {
  onChange: (name: string, value: any) => void;
  value: any;
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
};

const TextArea: React.FC<InputProps> = ({
  onChange,
  value,
  id,
  label,
  placeholder = "Enter your content",
  required = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
        {required && <span className="text-meta-1">*</span>}
      </label>
      <textarea
        onChange={handleChange}
        id={id}
        rows={6}
        name={id}
        placeholder={placeholder}
        required={required}
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      ></textarea>
    </>
  );
};

export default TextArea;
