import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import {
  changedActiveIndex,
  clearActiveIndex,
} from "../../../store/slices/appSlice";

type KeyProps = {
  label: string;
  onClick: (label: string) => void;
  isActive: boolean;
  index: number;
};

const Key: React.FC<KeyProps> = ({ label, onClick, isActive, index }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      className={
        "  border-2 border-black px-[30px] py-3" +
        (isActive ? " active_button " : " ")
      }
      onClick={() => onClick(label)}
      onMouseEnter={() => dispatch(changedActiveIndex(index))}
      onMouseLeave={() => dispatch(clearActiveIndex())}
    >
      {label}
    </button>
  );
};

export default Key;
