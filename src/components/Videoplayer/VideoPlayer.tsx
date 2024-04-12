import React, { useRef, useState, useLayoutEffect } from "react";

import useVideoPlayer from "./hooks/useVideoPlayer";
import useVideoFullScreen from "./hooks/useVideoFullScreen";

import { ReactComponent as PlayListIcon } from "./../../asset/svg/bootstrap-icons-1.11.2/collection-play-fill.svg";

import "./../../css/VideoPlayer.css";
import useConcealment from "./hooks/useConcealment";

import {
  Controls,
  Start,
  Progress,
  Volume,
  Screen,
  Time,
  PrevBtn,
  NextBtn,
} from "./Controls";
import PlayList from "./PlayList";
import { useSizeDisplay } from "../../hooks/useSizeDisplay";
type VideoList = {
  List: {
    Title: string;
    Preview: string;
    Video: string;
  }[];
};
const Video = ({ List }: VideoList) => {
  const videoElement = useRef(null);
  const [videoIndex, setVideoIndex] = useState(0);
  const { desktop, phone } = useSizeDisplay();
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoVolume,
    toggleMute,
    duration,
    videoProgress,
    toPrevVideo,
    toNextVideo,
  } = useVideoPlayer(videoElement, List, setVideoIndex, videoIndex);
  const { Title, Preview, Video } = List[videoIndex];
  const { handleFullScreen } = useVideoFullScreen();
const[transparency, setTransparency] =useState(0);
  const [playlistActive, setPlaylistActive] = useState(false);
  const handleMouseEventOut = () => {
   setTransparency(0);
  };

   const handleMouseEventMove = () => {
    setTransparency(1);
    let timeout;
    (() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setTransparency(0), 10000);
    })();
   
   };
  return (
    <div className="video__container" id="myvideo" onMouseLeave={handleMouseEventOut}   onMouseMove={handleMouseEventMove}>
      <div className="wrap-control  " style={{ opacity: `${transparency}` }}>
        <div className="wrap-info-video">
          <div className="video-name color-player">
            <h4 className=""> {Title}</h4>
            <div
              className="playlist "
              onClick={() => {
                setPlaylistActive(!playlistActive);
              }}
            >
              <PlayListIcon />
              {desktop ? <div>Плейлист</div> : <></>}
            </div>
          </div>
        </div>
        <div className="wrap-playlist">
          {playlistActive ? (
            <PlayList
              VideoList={List}
              setPlaylistActive={setPlaylistActive}
              setVideoIndex={setVideoIndex}
            />
          ) : (
            <></>
          )}
          {phone  ? (
            <div className="wrap-play-mobile">
              <PrevBtn event={toPrevVideo} />
              <Start start={playerState.isPlaying} event={togglePlay} />
              <NextBtn event={toNextVideo} />
            </div>
          ) : (
            <></>
          )}
        </div>
        <Controls>
          <Progress
            duration={duration}
            value={videoProgress}
            event={handleVideoProgress}
          />

          {desktop ? (
            <>
              <PrevBtn event={toPrevVideo} />
              <Start start={playerState.isPlaying} event={togglePlay} />
              <NextBtn event={toNextVideo} />
              <Volume
                EventVolume={handleVideoVolume}
                value={playerState.isMuted}
                EventMute={toggleMute}
              />
              <div></div>
            </>
          ) : (
            <></>
          )}

          <Time CurrentTime={videoProgress} DurationTime={duration} />

          <Screen value={handleFullScreen} />
        </Controls>
      </div>
      <div className="video-wrapper">
        <video
          src={window.location.origin + "/video/" + Video}
          onDoubleClick={togglePlay}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
      </div>
    </div>
  );
};

export default Video;
