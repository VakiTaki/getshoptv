import VideoPlayer from "../videoPlayer";

type Props = {};

function MainPage({}: Props) {
  return (
    <div className=" w-[1280px] h-[720px]  shadow-sm shadow-white  ">
      <VideoPlayer />
    </div>
  );
}

export default MainPage;
