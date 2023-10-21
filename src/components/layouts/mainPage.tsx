import { useEffect } from "react";
import Banner from "../ui/banner";
import Promo from "../ui/promo";
import VideoPlayer from "../ui/videoPlayer";
import { useAppDispatch } from "../../store/hooks";
import { changedIsShowPromo } from "../../store/slices/appSlice";

function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const setInactive = () => {
      timeoutId = setTimeout(() => {
        dispatch(changedIsShowPromo(false));
      }, 10000);
    };
    const handleActivity = () => {
      clearTimeout(timeoutId);
      setInactive();
    };
    setInactive();
    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keydown", handleActivity);
    return () => {
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("keydown", handleActivity);
    };
  }, []);

  return (
    <div className=" relative w-[1280px] h-[720px]  shadow-sm shadow-white overflow-hidden  ">
      <VideoPlayer />
      <Banner />
      <Promo />
    </div>
  );
}

export default MainPage;
