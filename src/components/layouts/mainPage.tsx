import React from "react";

type Props = {};

function MainPage({}: Props) {
  return (
    <div className=" bg-red-300 h-full">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/M7FIvfx5J10?si=Xcje034azDl-MSFD&amp;controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div id="player"></div>
    </div>
  );
}

export default MainPage;
