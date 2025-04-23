import React from "react";
import css from "./index.css";
import ReactPlayer from "react-player";

function Home() {
  return (
    <div className={css.bodyc}>
      <div className={css.headerTitle}>
          <h1 className={css.title}>Radio</h1>
      </div>
      <div className={css.container}>
          <ReactPlayer
            url="https://ec2.andrestone.online/hls/stream1.m3u8"
            playing
            controls
            width="100%"
            height="100%"
          />
          <script src="https://vjs.zencdn.net/7.21.1/video.min.js"></script>
       </div>
    </div>
  );
}
export { Home };
