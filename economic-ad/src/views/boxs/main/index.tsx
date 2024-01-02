import { useEffect, useState } from "react";

export default () => {
    const [status, setStatus] = useState<string>("");
    const channel = new BroadcastChannel("auth_sync");

    const syncItUp = () => {
        const messageTest: string = `Sent "sync" message`;
        setStatus(messageTest);
        channel.postMessage(messageTest);
    };

    useEffect(() => {
        channel.onmessage = (ev: any) => {
            setStatus(`Received "sync" message`);
        };

        return () => {
            channel.close();
        };
    }, [channel]);

    return (
        <div className="App">
            <div>
                Open this URL{" "}
                <span role="img" aria-label="hand pointing up">
                    👆
                </span>{" "}
                in a different tab
            </div>
            <button className="btn" onClick={syncItUp}>
                Sync It Up!
            </button>
            <div>{status}</div>
        </div>
    );
};
