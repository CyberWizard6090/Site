import React from 'react'
import { ReactComponent as PlayFile } from "./../../asset/svg/bootstrap-icons-1.11.2/file-play-fill.svg";
type VideoType = {
    src: string;
    title: string;
    setVideoIndex:any;
    setPlaylistActive:any;
    index:number
}

const PlaylistItem = ({src,title ,setPlaylistActive,setVideoIndex, index}:VideoType) => {
 

  return (
  <div className="PlaylistItem" onClick={()=>{setVideoIndex(index);setPlaylistActive(false)}}>
    <div className="Item-Title">
      <h4>{title}</h4>
    </div>
    <div className="VideoWrap">
    <video src={window.location.origin + "/video/" + src} />
    </div>
  </div>
  )
}

export default PlaylistItem