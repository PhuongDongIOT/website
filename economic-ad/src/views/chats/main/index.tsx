'use client'

import { useEffect, useState } from "react";
import { mainConfig } from '~configs/main.config';

import { Player } from '~stories/Player';

export default () => {
    const [ urlStreamVideo, setUrlStreamVideo ] = useState<any>(null)
    const constraints: any = mainConfig.isClientSide ? window.constraints = {
        audio: false,
        video: true
    }: null;

    function handleSuccess(stream: any) {
        const videoTracks = stream.getVideoTracks();
        setUrlStreamVideo(videoTracks);
        console.log('Got stream with constraints:', constraints);
        console.log(`Using video device: ${videoTracks[0].label}`);
      }

      const handleError = (error: any) => {
        console.log(error)
      }

    const init = async(evt: any) => {
        if(mainConfig.isClientSide) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                handleSuccess(stream);
                evt.target.disabled = true;
              } catch (e) {
                handleError(e);
              }
        }
      }



    return (
        <div className="App">
            <div>
                Open this URL{" "}
                <span role="img" aria-label="hand pointing up">
                    👆
                </span>{" "}
                in a different tab
            </div>
            <button className="btn" onClick={init}>
                Sync It Up!
            </button>
            <Player
                techOrder={['youtube']}
                autoplay={false}
                controls={true}
                sources={
                    [
                        {
                            src: urlStreamVideo,
                            type: 'application/x-mpegURL',
                        },
                    ]
                } />
            <video controls autoPlay={true}>
                <source src={urlStreamVideo} type="video/mp4" />
            </video>
        </div>
    );
};
