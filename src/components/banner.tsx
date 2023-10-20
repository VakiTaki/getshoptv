import { useState, useEffect } from "react";
import banner from "../images/banner.svg";
import { start } from "repl";

type Props = { isShow: boolean; setIsShowPromo: (b: boolean) => void };

function Banner({ isShow, setIsShowPromo }: Props) {
  const [showBanner, setShowBanner] = useState(false);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (!isStart && !isShow) {
      const timeoutId = setTimeout(() => {
        setIsStart(true);
        setShowBanner(true);
      }, 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isShow, isStart]);

  useEffect(() => {
    if (!isShow && isStart) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, [isShow, isStart]);

  const handleOpen = () => {
    setIsShowPromo(true);
  };

  return (
    <div
      className={
        " absolute z-20 bottom-[100px] transition-all duration-1000 cursor-pointer   " +
        (showBanner ? " right-[40px] " : " -right-[200%] invisible ")
      }
      onClick={handleOpen}
    >
      <img src={banner} alt="Баннер" className="  h-80 object-contain" />
    </div>
  );
}

export default Banner;
