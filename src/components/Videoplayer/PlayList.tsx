import React from "react";
import PlaylistItem from "./PlaylistItem";
import Slider from "../Slider/Slider";
import Slide from "../Slider/Slide";

type TypeList = {
  VideoList: {
    Title: string;
    Preview: string;
    Video: string;
  }[];
  setVideoIndex:any;
  setPlaylistActive:any;
};
const PlayList = ({ VideoList,setVideoIndex, setPlaylistActive }: TypeList) => {
  return (
    <div className="PlayList">
      <Slider width="100%" height="100%" autoPlayTime={15000} autoPlay={false}>
     
        {VideoList.map((item: any, index) => (
          <Slide>
        
            <PlaylistItem src={item.Video} title={item.Title} setPlaylistActive={setPlaylistActive} setVideoIndex={setVideoIndex} index={index}/>
          </Slide>
        ))}
      </Slider>
    </div>
  );
};

export default PlayList;
