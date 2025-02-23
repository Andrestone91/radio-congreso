import React from "react";
import css from "./index.css";
import ReactPlayer from "react-player";

function Home() {
  return (
    <div className={css.bodyc}>
      <h1>home</h1>
      {/* <section>
        <ReactPlayer
          url="http://192.168.0.17:8080/hls/stream.m3u8"
          playing
          controls
          width="50%"
          height="50%"
        />
        <script src="https://vjs.zencdn.net/7.21.1/video.min.js"></script>
      </section> */}
    </div>
  );
}
export { Home };
