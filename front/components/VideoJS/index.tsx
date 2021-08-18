import React, { FC } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import '@videojs/themes/dist/fantasy/index.css';

interface Props{
    options:{
        autoplay: boolean,
        controls: boolean,
        responsive: boolean,
        fluid: boolean,
        poster:string,
        sources: 
            {
                src:string,
                type:string
            }[]        
    }
}

export const VideoJS:FC<Props> = ( props:any ) => {

  const videoRef = React.useRef(null);
  const { options } = props;

  // This seperate functional component fixes the removal of the videoelement 
  // from the DOM when calling the dispose() method on a player
  const VideoHtml = ( props:any ) => (
    <div data-vjs-player>        
      <video ref={videoRef} className="video-js vjs-theme-fantasy" />
    </div>
  );

  React.useEffect( () => {
    const videoElement = videoRef.current;
    let player:any;
    if( videoElement ) {
      player = videojs( videoElement, options, () => {
        console.log("player is ready");
      });
    }
    return () => {
      if( player ) {
        player.dispose();
      }
    }
  }, [options]);

  return (<VideoHtml />);
}
export default VideoJS;