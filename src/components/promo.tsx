import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import qr from "../images/qr.svg";
import PromoItem from "./promoItem";

type Props = { isShow: boolean; setIsShowPromo: (b: boolean) => void };

function Promo({ isShow, setIsShowPromo }: Props) {
  const buttonsCount = 14;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  console.log(activeIndex);
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft" && activeIndex > 0) {
      if (activeIndex === 13) {
        setActiveIndex(4);
      } else {
        setActiveIndex(activeIndex - 1);
      }
    } else if (event.key === "ArrowRight" && activeIndex < buttonsCount - 1) {
      if (
        activeIndex === 2 ||
        activeIndex === 5 ||
        activeIndex === 8 ||
        activeIndex >= 10
      ) {
        setActiveIndex(13);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    } else if (event.key === "ArrowUp" && activeIndex > 0) {
      if (activeIndex > 2 && activeIndex < 9) {
        setActiveIndex(activeIndex - 3);
      } else {
        if (activeIndex === 10) {
          setActiveIndex(activeIndex - 2);
        } else {
          setActiveIndex(activeIndex - 1);
        }
      }
    } else if (event.key === "ArrowDown" && activeIndex < buttonsCount - 1) {
      if (activeIndex < 8) {
        setActiveIndex(activeIndex + 3);
      } else {
        if (activeIndex == 8) {
          setActiveIndex(activeIndex + 2);
        } else if (activeIndex === 12) {
        } else {
          setActiveIndex(activeIndex + 1);
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [activeIndex]);
  const handleClose = () => {
    setIsShowPromo(false);
  };
  return (
    <>
      <div className=" absolute z-10 h-full w-full top-0 left-0  flex justify-between   ">
        <div
          className={
            " absolute top-0  bg-[#86D3F4] w-[30%] h-full  transition-all duration-1000" +
            (isShow ? " left-0 " : " -left-[200%] invisible  ")
          }
        >
          <PromoItem activeIndex={activeIndex} />
        </div>
        <div
          className={
            " absolute  right-0 bg-white w-[88px] h-[52px] mt-5 mr-5 flex justify-center items-center hover:opacity-70  shadow-md transition-all duration-1000  " +
            (isShow ? " top-0 " : " -top-[200%] invisible  ") +
            (activeIndex === 13 ? " active_button " : " ")
          }
          onClick={handleClose}
        >
          <XMarkIcon className=" h-6 w-6  " />
        </div>
        <div
          className={
            " absolute  bottom-[40px] w-[300px]  transition-all duration-1000   " +
            (isShow ? " right-[40px] " : " -right-[200%] invisible ")
          }
        >
          <img src={qr} alt="Баннер" className="   object-contain" />
        </div>
      </div>
    </>
  );
}

export default Promo;
