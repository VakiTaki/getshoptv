import React from "react";

type KeyProps = {
  label: string;
  onClick: (label: string) => void;
  isActive: boolean;
};

const Key: React.FC<KeyProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      className={
        "  border-2 border-black px-[30px] py-3" +
        (isActive ? " active_button " : " ")
      }
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Key;
