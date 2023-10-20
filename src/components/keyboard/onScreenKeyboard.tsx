import { useState, useEffect } from "react";
import Key from "./key";

type Props = { onChangeNumber: (e: string) => void; activeIndex: number };

function OnScreenKeyboard({ onChangeNumber, activeIndex }: Props) {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [inputText, setInputText] = useState<string>("");
  const handleKeyClick = (label: string) => {
    onChangeNumber(label);
  };
  return (
    <div>
      <div>{inputText}</div>
      <div className=" grid grid-cols-3 w-full gap-2.5 ">
        {keys.map((key, ind) => (
          <Key
            label={key}
            onClick={handleKeyClick}
            key={key}
            isActive={activeIndex === ind}
          />
        ))}
        <button
          className={
            "col-span-2 uppercase border-2 border-black " +
            (activeIndex === 9 ? " active_button" : " ")
          }
          onClick={() => handleKeyClick("backspace")}
        >
          {" "}
          стереть{" "}
        </button>
        <Key
          label={"0"}
          onClick={handleKeyClick}
          isActive={activeIndex === 10}
        />
      </div>
    </div>
  );
}

export default OnScreenKeyboard;
