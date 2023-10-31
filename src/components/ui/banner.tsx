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
  //isShowBanner === isShowPromo
  const isShowPromo = useAppSelector(getIsShowPromo());
  //Триггер на начало воспроизведения
  const isStartPlay = useAppSelector(getIsStartPlay());
  //Состояние для отображения баннера которое зависит от isStartPlay, isShowPromo, isStart
  const [isShowBanner, setIsShowBanner] = useState<boolean>(false);
  //Триггер на первый запуск
  const [isStart, setIsStart] = useState<boolean>(true);

  const handleKeyPress = (event: KeyboardEvent) => {
    console.log(event.key);
    if (event.key === "Enter") {
      if (isShowBanner) {
        handleOpen();
        dispatch(changedActiveIndex(4));
      }
    }
  };

  useEffect(() => {
    isShowBanner
      ? window.addEventListener("keydown", handleKeyPress)
      : window.removeEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isShowBanner]);

  //Таймаут на начало воспроизведения + 5 сек, переписал так проще для понимания
  useEffect(() => {
    if (isStart) {
      if (!isShowPromo && isStartPlay) {
        const timeoutId = setTimeout(() => {
          setIsStart(false);
          setIsShowBanner(true);
        }, 5000);
        return () => {
          clearTimeout(timeoutId);
        };
      }
    } else {
      setIsShowBanner(!isShowPromo);
    }
  }, [isShowPromo, isStart, isStartPlay]);

  const handleOpen = () => {
    dispatch(changedIsShowPromo(true));
  };

  return (
    <div
      className={
        " absolute z-20 bottom-[100px] transition-all duration-1000 cursor-pointer shadow-sm shadow-white   " +
        (isShowBanner ? " right-[40px] " : " -right-[200%] invisible ")
      }
      onClick={handleOpen}
    >
      <img src={banner} alt="Баннер" className="  h-80 object-contain" />
    </div>
  );
}

export default Banner;
