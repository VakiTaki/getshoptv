import Key from "./key";
import {
  changedActiveIndex,
  clearActiveIndex,
  getActiveIndex,
  phoneChanged,
} from "../../../store/slices/appSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

function OnScreenKeyboard() {
  const dispatch = useAppDispatch();
  const activeIndex = useAppSelector(getActiveIndex());
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const handleKeyClick = (label: string) => {
    dispatch(phoneChanged(label));
  };
  return (
    <div className=" w-full">
      <div className=" grid grid-cols-3 w-full gap-2.5 ">
        {keys.map((key, ind) => (
          <Key
            label={key}
            onClick={handleKeyClick}
            key={key}
            isActive={activeIndex === ind}
            index={ind}
          />
        ))}
        <button
          className={
            "col-span-2 uppercase border-2 border-black  duration-300 " +
            (activeIndex === 9 ? " active_button" : " ")
          }
          onClick={() => handleKeyClick("backspace")}
          onMouseEnter={() => dispatch(changedActiveIndex(9))}
          onMouseLeave={() => dispatch(clearActiveIndex())}
        >
          {" "}
          стереть{" "}
        </button>
        <Key
          label={"0"}
          onClick={handleKeyClick}
          isActive={activeIndex === 10}
          index={10}
        />
      </div>
    </div>
  );
}

export default OnScreenKeyboard;
