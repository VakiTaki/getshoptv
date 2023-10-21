import Banner from "../ui/banner";
import Promo from "../ui/promo";
import VideoPlayer from "../ui/videoPlayer";

function MainPage() {
  return (
    <div className=" relative w-[1280px] h-[720px]  shadow-sm shadow-white overflow-hidden  ">
      <VideoPlayer />
      <Banner />
      <Promo />
    </div>
  );
}

export default MainPage;
