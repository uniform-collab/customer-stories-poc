import React, { useCallback, useRef, useState } from "react";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";
import { AssetParamValue, flattenValues } from "@uniformdev/canvas";
import dynamic from "next/dynamic";
import { PlayButton } from "./PlayButton";

type VideoProps = ComponentProps<{
  title: string;
  videoUrl?: string;
  thumbnail?: AssetParamValue;
}>;

const Video: React.FC<VideoProps> = ({ videoUrl, thumbnail }) => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);
  const onPlay = useCallback(() => setPlaying(true), []);
  const onPause = useCallback(() => setPlaying(false), []);
  return (
    <div className="w-full h-full border-2 border-white group/video relative [&_video]:!object-cover">
      {videoUrl && (
        <div style={{ paddingBottom: "56.25%" }}>
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            playing={playing}
            onPause={onPause}
            onPlay={onPlay}
            width="100%"
            height="100%"
            controls={false}
            muted={false}
            loop={false}
            style={{ position: "absolute", left: 0, top: 0 }}
            light={flattenValues(thumbnail, { toSingle: true })?.url}
            playIcon={<PlayButton onClick={onPlay} />}
          />
        </div>
      )}
    </div>
  );
};

registerUniformComponent({
  type: "video",
  component: Video,
});

export default Video;
