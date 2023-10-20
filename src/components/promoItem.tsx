import React, { useState } from "react";
import OnScreenKeyboard from "./keyboard/onScreenKeyboard";
import PhoneInput from "./phoneInput";
import CustomCheckbox from "./ui/form /customCheckbox";

type Props = {};

function PromoItem({}: Props) {
  const [phone, setPhone] = useState<string>("");
  const handleChangeNumber = (target: string) => {
    if (target === "backspace") {
      setPhone((prev) => prev.slice(0, -1));
    } else {
      if (phone.length < 10) setPhone((prev) => prev + target);
    }
  };
  return (
    <div className=" flex justify-center items-center px-12 py-[72px] h-full">
      <div className=" flex flex-col justify-between items-center text-center h-full">
        <h2>Введите ваш номер мобильного телефона</h2>
        <PhoneInput phone={phone} />
        <span>и с Вами свяжется наш менеждер для дальнейшей консультации</span>
        <OnScreenKeyboard onChangeNumber={handleChangeNumber} />
        <CustomCheckbox />
        <button
          className="col-span-2 uppercase border-2 border-black  px-5 py-3 disabled:text-[#4E4E4E] disabled:border-[#4E4E4E] duration-300"
          disabled={phone.length < 10}
        >
          Подтвердить номер
        </button>
      </div>
    </div>
  );
}

export default PromoItem;
