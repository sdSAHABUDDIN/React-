import React, { useRef, useState } from 'react'
import {highlightFirsVideo} from '../utils'
const VideoImplement = () => {
  const videoRef=useRef(null);
  const [isPlaying,setIsPlayig]=useState(false)
  const [isMute,setIsMute]=useState(false);
  //Before performing any actions like .play(), .pause(), or toggling muted, we need to make sure the video element exists. Otherwise, calling these methods would result in an error.
  function handlePlayPause(){
    if(videoRef.current){
      isPlaying?videoRef.current.pause():videoRef.current.play();
      setIsPlayig(!isPlaying)
    }
  }
  function handleMute(){
    if(videoRef.current){
      isMute?videoRef.current.muted=true:videoRef.current.muted=false;
      setIsMute(!isMute)
    }
  }
  return (
    <div className='m-5 '>
      <div className=''>
      <video
        ref={videoRef}
        muted
        onPlay={()=>setIsPlayig(true)}
        onPause={()=>setIsPlayig(false)}
        className='object-contain rounded-2xl' >
        <source src={highlightFirsVideo}
        />
      </video>
      <div className='flex justify-center text-2xl'>
      <button onClick={handlePlayPause}>
        {isPlaying?"⏸":"▶"}
      </button>
      <button onClick={handleMute}>
        {!isMute?"🔇" : "🔊"}
      </button>
      </div>
     
      
      </div>
      
    </div>
  )
}

export default VideoImplement