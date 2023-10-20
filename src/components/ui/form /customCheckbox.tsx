import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  value: boolean;
  label: string;
  onChange: () => void;
  isActive: boolean;
};

function CustomCheckbox({ value, label, onChange, isActive }: Props) {
  return (
    <div className="flex   items-center justify-center gap-1 w-full ">
      <div className="inline-flex items-center ">
        <label
          className="relative flex cursor-pointer items-center rounded-full"
          data-ripple-dark="true"
        >
          <input
            type="checkbox"
            className="  before:content[''] peer relative h-10 w-10 cursor-pointer appearance-none  border-2 border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-4 before:w-4 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity   hover:before:opacity-10"
            checked={value}
            onChange={onChange}
          />
          <div className="pointer-events-none w-10 h-10 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-black  opacity-0 transition-opacity peer-checked:opacity-100">
            <CheckIcon className=" w-10 h-10" />
          </div>
        </label>
      </div>
      <span
        className={
          " ml-2  text-sm    text-left" +
          (isActive ? " text-black" : " text-[#565656]")
        }
      >
        {label}
      </span>
    </div>
  );
}

export default CustomCheckbox;
