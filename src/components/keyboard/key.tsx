import React from "react";

type KeyProps = {
  label: string;
  onClick: (label: string) => void;
};

const Key: React.FC<KeyProps> = ({ label, onClick }) => {
  return (
    <button
      className="  border-2 border-black px-[30px] py-3"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Key;
