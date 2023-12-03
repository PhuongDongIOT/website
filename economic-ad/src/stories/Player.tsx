import { useCallback, useEffect, useState } from 'react';
import videojs from 'video.js';

import 'video.js/dist/video-js.css';

interface PlayerProps {
    techOrder: string[]
    autoplay: boolean
    controls: boolean
    sources: {
        src: string
        type: string
    }[]
}

const Player = (props: PlayerProps) => {
    const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null)
    const onVideo = useCallback((el: HTMLVideoElement) => {
        setVideoEl(el)
    }, [])

    useEffect(() => {
        if (videoEl == null) {
            return
        }

        const player = videojs(videoEl, props)

        return () => {
            player.dispose()
        }
    }, [props, videoEl])

    return (
        <div className="w-full h-96">
            <div data-vjs-player>
                <video ref={onVideo} className="video-js w-full h-full" playsInline />
            </div>
        </div>
    )
}

export type {
    PlayerProps
}

export {
    Player
}