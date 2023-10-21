import { useState, useRef, useEffect } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  changedIsStartPlay,
  getIsShowPromo,
} from "../../store/slices/appSlice";

function VideoPlayer() {
  const dispatch = useAppDispatch();
  const videoId = "M7FIvfx5J10?";
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const isShowBanner = useAppSelector(getIsShowPromo());

  useEffect(() => {
    setTimeout(() => {
      if (isLoaded) {
        playVideo();
      }
    }, 0);
  }, [isLoaded]);

  useEffect(() => {
    if (isShowBanner) {
      pauseVideo();
    } else {
      playVideo();
    }
  }, [isShowBanner]);

  const onReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    setIsLoaded(true);
  };
  const onStateChange: YouTubeProps["onStateChange"] = (event) => {
    if (event.data === 1) {
      dispatch(changedIsStartPlay());
    }
  };

  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const pauseVideo = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };

  const opts: YouTubeProps["opts"] = {
    height: "720",
    width: "1280",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      fs: 0,
    },
  };

  return (
    <div>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onEnd={playVideo}
        onStateChange={onStateChange}
      />
    </div>
  );
}

export default VideoPlayer;
