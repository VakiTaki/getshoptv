import { useState } from "react";
import banner from "../images/banner.svg";

type Props = { isShow: boolean; setIsShowPromo: (b: boolean) => void };

function Banner({ isShow, setIsShowPromo }: Props) {
  const handleOpen = () => {
    setIsShowPromo(true);
  };

  return (
    <div
      className={
        " absolute z-20 bottom-[100px] transition-all duration-1000 cursor-pointer   " +
        (!isShow ? " right-[40px] " : " -right-[200%] invisible ")
      }
      onClick={handleOpen}
    >
      <img src={banner} alt="Баннер" className="  h-80 object-contain" />
    </div>
  );
}

export default Banner;
