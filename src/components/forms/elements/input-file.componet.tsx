import React, { useState } from "react";

type InputProps = {
  onChange: (name: string, value: any) => void;
  files: File[];
  id: string;
  type: string;
  label: string;
  placeholder: string;
  required?: boolean;
};

const InputFile: React.FC<InputProps> = ({
  onChange,
  files,
  id,
  label,
  type = "file",
  placeholder = "Choose a file",
  required = false,
}) => {
  const [recent, setRecent] = useState<string[]>([]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: selectedFiles, value } = e.target;
    console.log("input_value:", value);
    console.log("input_file:", selectedFiles);
    if (selectedFiles?.length) {
      const newFiles = [];
      const newRecentFiles = [];

      const filteredSelectedFiles = Array.from(selectedFiles).filter(
        (selectedFile) => {
          return !files.some(
            (existingFile) => existingFile.name === selectedFile.name
          );
        }
      );

      for (let i = 0; i < filteredSelectedFiles.length; i++) {
        const item = filteredSelectedFiles[i];
        newFiles.push(item);
        newRecentFiles.push(item.name);
      }
      onChange(name, [...files, ...newFiles]);
      setRecent([...recent, ...newRecentFiles]);
    }
  };

  const handleRemove = (index: number) => {
    const newFiles = [...files];
    const newRecentFiles = [...recent];

    newFiles.splice(index, 1);
    newRecentFiles.splice(index, 1);
    onChange(id, newFiles);
    setRecent(newRecentFiles);
  };

  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
        {required && <span className="text-meta-1">*</span>}
      </label>
      {recent.length ? (
        recent.map((file: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between mb-4.5 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          >
            <span className="truncate">{file}</span>
            <span
              className="cursor-pointer text-primary hover:text-red"
              onClick={() => handleRemove(index)}
            >
              <b>&#10005;</b>
            </span>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-between mb-4.5 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
          No file chosen
        </div>
      )}
      <input
        onChange={handleChange}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
        accept="image/*"
        multiple
      />
    </>
  );
};
export default InputFile;
