import OnScreenKeyboard from "./keyboard/onScreenKeyboard";
import CustomCheckbox from "./form /customCheckbox";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  changeIsAgree,
  changeIsSubmit,
  changedActiveIndex,
  changedIsPhoneValid,
  changedIsValid,
  clearActiveIndex,
  getActiveIndex,
  getIsAgree,
  getIsPhoneValid,
  getIsValid,
  getPhone,
} from "../../store/slices/appSlice";
import { useEffect } from "react";
import PhoneInput from "./phoneInput";
import { validatePhoneNumber } from "../../service/validateNumber";

function PromoItem() {
  const dispatch = useAppDispatch();
  const isAgree = useAppSelector(getIsAgree());
  const phone = useAppSelector(getPhone());
  const activeIndex = useAppSelector(getActiveIndex());
  const isValid = useAppSelector(getIsValid());
  const isPhoneValid = useAppSelector(getIsPhoneValid());

  const handleChangeAgree = () => {
    dispatch(changeIsAgree());
  };

  useEffect(() => {
    dispatch(changedIsValid(isAgree && phone.length === 10));
  }, [isAgree, phone]);

  return (
    <div className=" flex justify-center items-center px-12 py-[72px] h-full w-full">
      <div className=" flex flex-col justify-between items-center text-center h-full w-full">
        <h2>Введите ваш номер мобильного телефона</h2>
        <PhoneInput />
        <span>и с Вами свяжется наш менеждер для дальнейшей консультации</span>
        <OnScreenKeyboard />
        <div className=" w-full flex justify-center items-center h-10">
          {isPhoneValid ? (
            <CustomCheckbox
              value={isAgree}
              label={"Согласие на обработку персональных данных"}
              onChange={handleChangeAgree}
              isActive={activeIndex === 11}
            />
          ) : (
            <span className=" uppercase text-[#EA0000]">
              Неверно введён номер
            </span>
          )}
        </div>

        <button
          className={
            "col-span-2 uppercase border-2 border-black  px-5 py-3 disabled:text-[#4E4E4E] disabled:border-[#4E4E4E] duration-300 w-full" +
            (activeIndex === 12 ? " active_button" : " ")
          }
          disabled={!isValid}
          onMouseEnter={() => {
            dispatch(changedActiveIndex(12));
          }}
          onMouseLeave={() => dispatch(clearActiveIndex())}
          onClick={async () => {
            if (isValid) {
              const result = await validatePhoneNumber(phone);
              dispatch(changedIsPhoneValid(result));
              if (result) {
                dispatch(changeIsSubmit());
              }
            }
          }}
        >
          Подтвердить номер
        </button>
      </div>
    </div>
  );
}

export default PromoItem;
