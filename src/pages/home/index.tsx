import React from "react";
import css from "./index.css";
import ReactPlayer from "react-player";

function Home() {
  return (
    <div className={css.bodyc}>
      <div>
        <h1 className={css.title}>radio</h1>
      </div>
      <section>
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
      </section>
      {/* <div className={css.container}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/G5pHuBCqgrs?autoplay=1"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
}
export { Home };
