import { useState } from "react";
import Banner from "../banner";
import Promo from "../promo";
import VideoPlayer from "../videoPlayer";

type Props = {};

function MainPage({}: Props) {
  const [isShowPromo, setIsShowPromo] = useState<boolean>(false);
  return (
    <div className=" relative w-[1280px] h-[720px]  shadow-sm shadow-white overflow-hidden  ">
      <VideoPlayer />
      <Banner isShow={isShowPromo} setIsShowPromo={setIsShowPromo} />
      <Promo isShow={isShowPromo} setIsShowPromo={setIsShowPromo} />
    </div>
  );
}

export default MainPage;
