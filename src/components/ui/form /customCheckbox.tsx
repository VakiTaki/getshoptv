import React from "react";

type Props = {};

function CustomCheckbox({}: Props) {
  return (
    <div className="flex  items-center gap-1">
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full"
          //  htmlFor={name}
          data-ripple-dark="true"
        >
          <input
            type="checkbox"
            className="  before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none  border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-4 before:w-4 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity   hover:before:opacity-10"
            // name={name}
            // value={value}
            // checked={checked}
            // onChange={handleChange}
          />
          <div className="pointer-events-none w-2 h-2 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-black bg-text-primary-green opacity-0 transition-opacity peer-checked:opacity-100"></div>
        </label>
      </div>
      <span className=" ml-2 text=[14px] font-normal leading-5 text-text-primary ">
        Согласие на обработку персональных данных
      </span>
    </div>
  );
}

export default CustomCheckbox;
