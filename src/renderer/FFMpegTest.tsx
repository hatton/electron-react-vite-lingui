import { default as React, useMemo } from "react";
import ffmpeg from "fluent-ffmpeg";
import { locate } from "./LocateElectronFile";

const ffmpegPath = require("ffmpeg-static").replace(
  "app.asar",
  "app.asar.unpacked"
);

ffmpeg.setFfmpegPath(ffmpegPath);

export const FFMpegTest: React.FunctionComponent = () => {
  const [length, setLength] = React.useState<string>("");
  React.useEffect(() => {
    getLength().then((length) => setLength(length));
  }, []);

  return (
    <div>
      <h2>FFMpeg test</h2>

      {`mp3 length=${length}`}
    </div>
  );
};

function getLength(): Promise<string> {
  return new Promise((resolve, reject) => {
    const path = locate("assets/right_answer.mp3");
    ffmpeg.ffprobe(path, (err, metadata) => {
      if (err) {
        reject(err);
      } else {
        resolve(metadata.format.duration?.toString() ?? "no duration");
      }
    });
  });
}
