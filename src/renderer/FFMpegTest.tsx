import { default as React, useMemo } from "react";
import ffmpeg from "fluent-ffmpeg";
import { locate } from "./LocateElectronFile";

const ffmpegPath = require("ffmpeg-static").replace(
  "app.asar",
  "app.asar.unpacked"
);

ffmpeg.setFfmpegPath(ffmpegPath);
const x = require("ffprobe-static").path;
console.log(`ffprobe-static.path=${x}`);
const ffprobePath = require("ffprobe-static")
  .path // during run from release (win-unpacked or installed)
  .replace("app.asar", ""); // on windows, both installed and not installed, win-unpacked/resources/node_modules/ffprobe-static exists
console.log(`adjusted ffprobe-static.path=${ffprobePath}`);
ffmpeg.setFfprobePath(ffprobePath);
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
