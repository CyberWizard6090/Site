import { useState, useEffect } from "react";

const useVideoFullScreen = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreen = (  )=>{
      const elem = document.getElementById("myvideo");
        if (!isFullScreen) {
          elem!.requestFullscreen();
          setIsFullScreen(true);
        } else {
          document.exitFullscreen();
          setIsFullScreen(false);
        }
      };
      return {
        handleFullScreen
      }
}

export default useVideoFullScreen

