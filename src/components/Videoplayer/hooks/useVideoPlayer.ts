
import { useState, useEffect, useRef } from "react";

const useVideoPlayer = (videoElement: any, List: any,setVideoIndex :any, videoIndex:any) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    volume: 1,
    isMuted: false,
    progress: 0,

  });
  const [duration, setDuration] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });

  };


  // alert(videoElement.current.duration)  const { duration } = videoElement.current.duration;
  const handleOnTimeUpdate = () => {
    setDuration(videoElement.current.duration);

    setVideoProgress(videoElement.current.currentTime);
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
  }

  const handleVideoProgress = (event: { target: { value: any; }; }) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime = manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const handleVideoVolume = (event: { target: { value: any; }; }) => {
    const vol = Number(event.target.value);
    videoElement.current.volume = vol;
    setPlayerState({
      ...playerState,
      volume: vol,
    });
  };

  // const handleVideoSpeed = (event) => {
  //   const speed = Number(event.target.value);
  //   videoElement.current.playbackRate = speed;
  //   setPlayerState({
  //     ...playerState,
  //     speed,
  //   });
  // };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };
  // const fullScreen = () => {

  //   if (videoElement.current.requestFullScreen) {
  //     videoElement.current.requestFullScreen();
  //   } else if (videoElement.current.webkitRequestFullScreen) {
  //     videoElement.current.webkitRequestFullScreen();
  //   } else if (videoElement.current.mozRequestFullScreen) {
  //     videoElement.current.mozRequestFullScreen();
  //   }
  // };

  // const toPrevTrack = () => {
  //   console.log('TODO go to prev');
  // }

  // const toNextTrack = () => {
  //   console.log('TODO go to next');
  // }

  // useEffect(()=>{
  //   videoElement.current != null ?  setDuration (videoElement.current.duration) : setDuration (0);

  //  setVideoProgress(videoElement.current.currentTime)
  // },[playerState.isPlaying,videoElement]
  const toPrevVideo = () => {
    if (videoIndex === 0) {
      setVideoIndex(List.length - 1);
    } else {
      setVideoIndex(videoIndex - 1);
    }
    
  };
  const toNextVideo = () => {
    if (videoIndex === List.length - 1) {
      setVideoIndex(0);
    } else {
      setVideoIndex(videoIndex + 1);
    }

  };

  // useEffect(() => {
  //   videoElement.current.pause();

  //   // audioRef.current = new Audio(audioSrc);
  

  //   if (videoElement.current) {
  //     videoElement.current.play();
  //     setPlayerState({
  //       ...playerState,
  //       isPlaying: true,
  //     });
   
  //   } else {
  //     // Set the isReady ref as true for the next pass
  //     videoElement.current = true;
  //   }
  // }, [videoIndex]);
  useEffect(() => {
    playerState.isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [playerState.isMuted, videoElement]);
  useEffect(() => {
    if (playerState.isPlaying) {
      videoElement.current.play();
      // startTimer();
    } else {
      videoElement.current.pause();
    }


  }, [playerState.isPlaying, videoElement, videoIndex]);
 
  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoVolume,
    toggleMute,
    duration,
    videoProgress,
    videoIndex,
    toPrevVideo,
    toNextVideo,

  };
};

export default useVideoPlayer;