import { useState, useEffect } from "react";
import banner from "../../images/banner.svg";
import {
  changedActiveIndex,
  changedIsShowPromo,
  getIsShowPromo,
  getIsStartPlay,
} from "../../store/slices/appSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function Banner() {
  const dispatch = useAppDispatch();
  const isShowBanner = useAppSelector(getIsShowPromo());
  const isStartPlay = useAppSelector(getIsStartPlay());
  const [showBanner, setShowBanner] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      if (showBanner) {
        handleOpen();
        dispatch(changedActiveIndex(4));
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [showBanner]);
  useEffect(() => {
    if (!isStart && !isShowBanner && isStartPlay) {
      const timeoutId = setTimeout(() => {
        setIsStart(true);
        setShowBanner(true);
      }, 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isShowBanner, isStart, isStartPlay]);

  useEffect(() => {
    if (!isShowBanner && isStart) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, [isShowBanner, isStart]);

  const handleOpen = () => {
    dispatch(changedIsShowPromo(true));
  };

  return (
    <div
      className={
        " absolute z-20 bottom-[100px] transition-all duration-1000 cursor-pointer shadow-sm shadow-white   " +
        (showBanner ? " right-[40px] " : " -right-[200%] invisible ")
      }
      onClick={handleOpen}
    >
      <img src={banner} alt="Баннер" className="  h-80 object-contain" />
    </div>
  );
}

export default Banner;
