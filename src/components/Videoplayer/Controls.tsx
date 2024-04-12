import React from "react";
import { ReactComponent as Play } from "./../../asset/svg/bootstrap-icons-1.11.2/play-fill.svg";
import { ReactComponent as Pause } from "./../../asset/svg/bootstrap-icons-1.11.2/pause-fill.svg";
import { ReactComponent as Full } from "./../../asset/svg/bootstrap-icons-1.11.2/volume-up.svg";
import { ReactComponent as Mute } from "./../../asset/svg/bootstrap-icons-1.11.2/volume-mute.svg";
import { ReactComponent as FullScreen } from "./../../asset/svg/bootstrap-icons-1.11.2/fullscreen.svg";


import { ReactComponent as Prev } from "./../../asset/svg/bootstrap-icons-1.11.2/skip-start-fill.svg";
import { ReactComponent as Next } from "./../../asset/svg/bootstrap-icons-1.11.2/skip-end-fill.svg";
type TypeControl = {
  children: React.ReactNode;
};
type TypeProgress = {
  duration: any;
  event: any;
  value: any;
};
type TypeNextPrev ={
  event: any;
}
type TypeStart = {
  event: any;
  start: any;
};
type TypeVolume = {
  value: any;
  EventMute: any;
  EventVolume: any;
};
type TypeScreen = {
  value: any;
};
type TypeTime = {
  CurrentTime: any;
  DurationTime: any;
};
export const Controls = ({ children }: TypeControl) => {
  return (
    <div
      className="controls__wrap video__control__info "
      // onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseOut}
    >
      <div className="controls  color-player">{children}</div>
    </div>
  );
};
export const Start = ({ event, start }: TypeStart) => {
  return (
    <div className="video-control-item video-control-play" onClick={event}>
      {!start ? <Play /> : <Pause />}
    </div>
  );
};
export const Volume = ({ EventMute, value, EventVolume }: TypeVolume) => {
  return (
    <div className="video-control-volume">
      <div className="video-control-item" onClick={EventMute}>
        {!value ? <Full /> : <Mute />}
      </div>
      <div className="video-ProgressBar video-volume">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => EventVolume(e)}
        />
      </div>
    </div>
  );
};
export const Progress = ({ duration, value, event }: TypeProgress) => {
  return (
    <div className="video-ProgressBar video-duration">
      <input
        type="range"
        min="0"
        max={duration}
        value={value}
        onChange={(e) => event(e)}
      />
    </div>
  );
};
export const Screen = ({ value }: TypeScreen) => {
  return (
    <div className="video-control-item" onClick={value}>
      <FullScreen />
    </div>
  );
};
export const NextBtn =({event}:TypeNextPrev)=>{
return(
<div className="video-control-item" onClick={event}>
<Next/>
</div>
);
};
export const PrevBtn =({event}:TypeNextPrev)=>{
  return(
  <div className="video-control-item" onClick={event}>
    <Prev/>
  </div>
  );
}
export const Time = ({ CurrentTime, DurationTime }: TypeTime) => {
  function secondsToHms(d: any) {
    function ModifyCharacterCount(a: any) {
      if (a.length < 2) {
        let b = "0" + a;
        return b;
      } else {
        return a;
      }
    }
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? String(h) + ":" : "";
    var mDisplay = m > 0 ? ModifyCharacterCount(String(m)) + ":" : "0:";
    var sDisplay = s > 0 ? ModifyCharacterCount(String(s)) : "00";
    return hDisplay + mDisplay + sDisplay;
  }

  return (
    <div>
      {secondsToHms(CurrentTime)}/{secondsToHms(DurationTime)}
    </div>
  );
};
