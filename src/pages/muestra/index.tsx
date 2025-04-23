import React, { useEffect, useRef, useState } from "react";
import css from "./index.css";
import ReactPlayer from "react-player";
import Hls from "hls.js";

function NewSection({ url }) {
  const playerRef = useRef(null);
  const [hlsInstance, setHlsInstance] = useState(null);
  const [levels, setLevels] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(-1); // -1 es "Auto"
  const [videoSrc, setVideoSrc] = useState(url); // Guardamos la URL actualizada

  useEffect(() => {
    if (ReactPlayer.canPlay(url) && url.includes(".m3u8")) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(playerRef.current.getInternalPlayer());

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("Calidades disponibles:", hls.levels);
          if (hls.levels.length > 0) {
            setLevels(
              hls.levels.map((level, index) => ({
                index,
                height: level.height || `${index}p`,
              }))
            );
          }
        });

        setHlsInstance(hls);
      }
    }
  }, [url]);

  function handleQualityChange(levelIndex) {
    if (hlsInstance) {
      console.log(`Cambiando calidad a: ${levelIndex}`);
      hlsInstance.currentLevel = levelIndex; // Cambia la calidad
      setSelectedLevel(levelIndex);

      // 🔹 Opción 1: Actualizar la URL para forzar recarga
      setVideoSrc(""); // Limpiar la URL temporalmente
      setTimeout(() => setVideoSrc(url), 50); // Volver a cargarla después de 50ms
    }
  }

  return (
    <div className={css.bodyc}>
      <div>
        <h1 className={css.title}>Video de muestra</h1>
      </div>
      <div className={css["contenedor_product"]}>
        <ReactPlayer
          width="100%"
          height="100%"
          ref={playerRef}
          url={videoSrc}
          controls
          playing
        />
        {levels.length > 0 && (
          <select
            onChange={(e) => handleQualityChange(parseInt(e.target.value))}
            value={selectedLevel}
          >
            <option value="-1">Auto</option>
            {levels.map((level) => (
              <option key={level.index} value={level.index}>
                {level.height}p
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
export { NewSection };
