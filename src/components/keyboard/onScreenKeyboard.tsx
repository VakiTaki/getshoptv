import { useState, useEffect } from "react";
import Key from "./key";

type Props = { onChangeNumber: (e: string) => void };

function OnScreenKeyboard({ onChangeNumber }: Props) {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [inputText, setInputText] = useState<string>("");
  const handleKeyClick = (label: string) => {
    onChangeNumber(label);
  };
  return (
    <div>
      <div>{inputText}</div>
      <div className=" grid grid-cols-3 w-full gap-2.5 ">
        {keys.map((key) => (
          <Key label={key} onClick={handleKeyClick} key={key} />
        ))}
        <button
          className="col-span-2 uppercase border-2 border-black"
          onClick={() => handleKeyClick("backspace")}
        >
          {" "}
          стереть{" "}
        </button>
        <Key label={"0"} onClick={handleKeyClick} />
      </div>
    </div>
  );
}

export default OnScreenKeyboard;
