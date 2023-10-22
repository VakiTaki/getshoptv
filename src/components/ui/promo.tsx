import { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import qr from "../../images/qr.svg";
import final from "../../images/final.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  changeIsAgree,
  changeIsSubmit,
  changedActiveIndex,
  changedIsPhoneValid,
  changedIsShowPromo,
  clearActiveIndex,
  getActiveIndex,
  getIsShowPromo,
  getIsSubmit,
  getIsValid,
  getPhone,
  phoneChanged,
} from "../../store/slices/appSlice";
import PromoItem from "./promoItem";
import { validatePhoneNumber } from "../../service/validateNumber";

const keybordButtons = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "Backspace",
];

function Promo() {
  const dispatch = useAppDispatch();
  const isSubmit = useAppSelector(getIsSubmit());
  const isShowBanner = useAppSelector(getIsShowPromo());
  const activeIndex = useAppSelector(getActiveIndex());
  const phone = useAppSelector(getPhone());
  const isValid = useAppSelector(getIsValid());
  console.log(isValid);
  const buttonsCount = 14;

  const handleSubmit = async () => {
    const result = await validatePhoneNumber(phone);
    dispatch(changedIsPhoneValid(result));
    if (result) {
      dispatch(changeIsSubmit());
    }
  };
  //Функция обработки нажатия клавиш
  const handleKeyPress = (event: KeyboardEvent) => {
    if (keybordButtons.includes(event.key)) {
      dispatch(phoneChanged(event.key.toLowerCase()));
      setDefaultActiveIndex();
    } else if (activeIndex < 0) {
      setDefaultActiveIndex();
    } else if (event.key === "ArrowLeft" && activeIndex > 0) {
      if (activeIndex === 13) {
        dispatch(changedActiveIndex(4));
      } else {
        dispatch(changedActiveIndex(activeIndex - 1));
      }
    } else if (event.key === "ArrowRight" && activeIndex < buttonsCount - 1) {
      if (activeIndex < 0) {
        setDefaultActiveIndex();
      } else if (
        activeIndex === 2 ||
        activeIndex === 5 ||
        activeIndex === 8 ||
        activeIndex >= 10
      ) {
        dispatch(changedActiveIndex(13));
      } else {
        dispatch(changedActiveIndex(activeIndex + 1));
      }
    } else if (event.key === "ArrowUp" && activeIndex > 0) {
      if (activeIndex > 2 && activeIndex < 9) {
        dispatch(changedActiveIndex(activeIndex - 3));
      } else if (activeIndex === 9) {
        dispatch(changedActiveIndex(7));
      } else {
        if (activeIndex === 10) {
          dispatch(changedActiveIndex(activeIndex - 2));
        } else {
          dispatch(changedActiveIndex(activeIndex - 1));
        }
      }
    } else if (event.key === "ArrowDown" && activeIndex < buttonsCount - 1) {
      if (activeIndex < 7) {
        dispatch(changedActiveIndex(activeIndex + 3));
      } else if (activeIndex === 7) {
        dispatch(changedActiveIndex(activeIndex + 2));
      } else {
        if (activeIndex === 8) {
          dispatch(changedActiveIndex(activeIndex + 2));
        } else if (activeIndex === 9) {
          dispatch(changedActiveIndex(activeIndex + 2));
        } else if (activeIndex === 11) {
          console.log(activeIndex, isValid);
          if (isValid) dispatch(changedActiveIndex(activeIndex + 1));
        } else if (activeIndex === 12) {
        } else {
          dispatch(changedActiveIndex(activeIndex + 1));
        }
      }
    } else if (event.key === "Enter") {
      if (activeIndex >= 0 && activeIndex < 9) {
        dispatch(phoneChanged((activeIndex + 1).toString()));
      } else if (activeIndex === 10) {
        dispatch(phoneChanged("0"));
      } else if (activeIndex === 9) {
        dispatch(phoneChanged("backspace"));
      } else {
        switch (activeIndex) {
          case 11:
            dispatch(changeIsAgree());
            break;
          case 12:
            if (isValid) handleSubmit();
            break;
          case 13:
            handleClose();
            break;
          default:
            break;
        }
      }
    }
  };
  const setDefaultActiveIndex = () => {
    dispatch(changedActiveIndex(4));
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [activeIndex, isValid]);
  const handleClose = () => {
    dispatch(changedIsShowPromo(false));
  };
  return (
    <>
      <div className=" absolute z-10 h-full w-full top-0 left-0  flex justify-between   ">
        <div
          className={
            " absolute top-0  bg-[#86D3F4] w-[30%] h-full  transition-all duration-1000" +
            (isShowBanner ? " left-0 " : " -left-[200%] invisible  ")
          }
        >
          {isSubmit ? (
            <div className="flex justify-center items-center px-12 py-[72px] h-full">
              <img src={final} className="" alt="Заявка принята" />
            </div>
          ) : (
            <PromoItem />
          )}
        </div>
        <div
          className={
            " absolute  right-0 bg-white w-[88px] h-[52px] mt-5 mr-5 flex justify-center items-center hover:opacity-70  shadow-md transition-all duration-1000  " +
            (isShowBanner ? " top-0 " : " -top-[200%] invisible  ") +
            (activeIndex === 13 ? " active_button " : " ")
          }
          onMouseEnter={() => dispatch(changedActiveIndex(13))}
          onMouseLeave={() => dispatch(clearActiveIndex())}
          onClick={handleClose}
        >
          <XMarkIcon className=" h-6 w-6  " />
        </div>
        <div
          className={
            " absolute  bottom-[40px] w-[300px]  transition-all duration-1000   " +
            (isShowBanner ? " right-[40px] " : " -right-[200%] invisible ")
          }
        >
          <img src={qr} alt="Баннер" className="   object-contain" />
        </div>
      </div>
    </>
  );
}

export default Promo;
