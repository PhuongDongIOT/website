import React, { useEffect, MutableRefObject, useRef, useState } from "react";
import { Peer } from "peerjs";
import { mainConfig } from '~configs/main.config';


const VideoRoom = () => {
    if(mainConfig.isDevEnv) {
      const [peerId, setPeerId] = useState('');
      const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
      const remoteVideoRef = useRef<HTMLVideoElement & any >(null);
      const currentUserVideoRef = useRef<HTMLVideoElement& any>(null);
      const peerInstance = useRef<any>(null);

      useEffect(() => {
          
        const peer = new Peer();
        
        // const conn = peer.connect("9d629fbd-a608-401a-be64-36bee60f9308");
        peer.on("open", (id) => {
          setPeerId(id)
        });
        peer.on('call', (call) => {
          var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    
          getUserMedia({ video: true, audio: true }, (mediaStream: any | null) => {
            let devcurrentUserVideoRef = currentUserVideoRef.current;
            if(devcurrentUserVideoRef) {
              devcurrentUserVideoRef.srcObject = mediaStream;
              devcurrentUserVideoRef.play();
            }
            call.answer(mediaStream)
            call.on('stream', function(remoteStream) {
              let devRemoteVideoRef = remoteVideoRef.current;
              if(devRemoteVideoRef) {
                devRemoteVideoRef.srcObject = remoteStream
                devRemoteVideoRef.play();
              }
            });
          });
        })
    
        peerInstance.current = peer;
      }, []);

      
      const call = (remotePeerId) => {
        var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    
        getUserMedia({ video: true, audio: true }, (mediaStream: any | null) => {
    

          let devcurrentUserVideoRef = currentUserVideoRef.current;
          if(devcurrentUserVideoRef) {
            devcurrentUserVideoRef.srcObject = mediaStream;
            devcurrentUserVideoRef.play();
          }
    
          const call = peerInstance.current.call(remotePeerId, mediaStream)
    
          call.on('stream', (remoteStream: any | null) => {
            let devRemoteVideoRef = remoteVideoRef.current;
            if(devRemoteVideoRef) {
              devRemoteVideoRef.srcObject = remoteStream
              devRemoteVideoRef.play();
            }
          });
        });
      }

      return(
        <div>
          <h1>Current user id is {peerId}</h1>
          <input type="text" value={remotePeerIdValue} onChange={(e: React.ChangeEvent<HTMLInputElement & any>) => setRemotePeerIdValue(e.target.value)} />
          <button onClick={() => call(remotePeerIdValue)}>Call</button>
          <div>
            <video ref={currentUserVideoRef} />
          </div>
          <div>
            <video ref={remoteVideoRef} />
          </div>
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
              let video: any = videoCallRef.current;
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