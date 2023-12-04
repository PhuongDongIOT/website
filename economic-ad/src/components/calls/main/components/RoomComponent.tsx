import React, { useEffect, MutableRefObject, useRef, useState } from "react";
import { Peer } from "peerjs";
import { mainConfig } from '~configs/main.config';


const VideoRoom: React.FC = () => {
    if(mainConfig.isDevEnv) {

      const videoRef = useRef<HTMLInputElement>(null);

      useEffect(() => {
        import('peerjs').then(({ default: Peer }) => {
          
      const peer = new Peer({
        host: "localhost",
        port: 9001,
        path: "",
      });
      
      const conn = peer.connect("9d629fbd-a608-401a-be64-36bee60f9308");
      conn.on("open", () => {
        conn.send("Hello World!");
      });
      conn.on("data", (data) => {
        console.log("Received data", data);
      });
      const getVideo = () => {
        if(navigator.mediaDevices) {
          navigator.mediaDevices.getUserMedia({ video: true, audio: true })          
          .then((stream: any) => {
            const call = peer.call("another-peers-id", stream);
            call.on("stream", (remoteStream) => {              
              let video = videoRef.current;
              if(video) {
                video.srcObject = stream;
                video.play();
                console.log('hihi')
              }
            });
          })
          .catch((err: any) => {
            console.error("Failed to get local stream", err);
          });

        }
      };
        getVideo();
      });
      }, [videoRef]);

      return(
        <div>
          <video ref={videoRef}/>
        </div>
      )
    }
  };

  const VideoCallRoom: React.FC = () => {
    if(mainConfig.isDevEnv) {
      const peer = new Peer("sadasdsad243242432asddsadsadasd");
      const videoCallRef = useRef<HTMLInputElement>(null);
      const conn = peer.connect("another-peers-id");
      conn.on("open", () => {
        conn.send("hi!");
      });

      peer.on("connection", (conn) => {
        conn.on("data", (data) => {
          // Will print 'hi!'
          console.log(data);  
        });
        conn.on("open", () => {
          conn.send("hello!");
        });
      }); 

      const answer = () => {
        peer.on("call", (call) => {
          if(navigator.mediaDevices) {            
          navigator.mediaDevices.getUserMedia({ video: true, audio: true })          
          .then((stream: any) => {
            call.answer(stream); // Answer the call with an A/V stream.
            call.on("stream", (remoteStream) => {
              let video = videoCallRef.current;
              if(video) {
                video.srcObject = remoteStream;
                video.play();
                console.log('hihi')
              }
            });
          })
          .catch((err: any) => {
            console.error("Failed to get local stream", err);
          });
          }
        });
      }

      return(
        <div>
          <button
            onClick={() => answer()}
          >Join</button>
          <video ref={videoCallRef}/>
        </div>
      )
    }
  };
  
  const RoomComponent: React.FC = () => {
    const [isJoin, setIsJoin] = useState(false);
  
    return (
      <div className="App">
        <button
          onClick={() => {
            setIsJoin((b) => !b);
          }}
        >
          {isJoin ? "Leave" : "Join"}
        </button>
        <div>{isJoin ? <VideoRoom /> : <div />}</div>
        <VideoCallRoom />
      </div>
    );
  };
  
export default RoomComponent