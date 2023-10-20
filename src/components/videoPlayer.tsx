import React, { useState, useRef, useEffect } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";

function VideoPlayer() {
  const [videoId, setVideoId] = useState<string>("M7FIvfx5J10?");
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  //   useEffect(() => {
  //     if (isLoaded) playVideo();
  //   }, [isLoaded]);

  setTimeout(() => {
    playVideo();
  }, 1000);
  const onReady: YouTubeProps["onReady"] = (event) => {
    console.log(event);
    playerRef.current = event.target;
    setIsLoaded(true);
  };
  const onStateChange: YouTubeProps["onStateChange"] = (event) => {};

  const playVideo = () => {
    console.log("play");
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const pauseVideo = () => {
    console.log("pause");
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
        onStateChange={onStateChange}
        onPause={playVideo}
        onEnd={playVideo}
      />
      {isLoaded && (
        <>
          <button onClick={playVideo}>Play</button>
          <button onClick={pauseVideo}>Pause</button>
        </>
      )}
    </div>
  );
}

export default VideoPlayer;
