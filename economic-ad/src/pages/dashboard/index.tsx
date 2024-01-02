import { useState, useEffect } from 'react';
import { TinyliciousClient } from "@fluidframework/tinylicious-client";
import { SharedMap } from "fluid-framework";
import { mainConfig } from '~configs/main.config';
 
export default function Index() {

  const getFluidData = async () => {
    const client = new TinyliciousClient();
    const containerSchema = {
        initialObjects: { sharedTimestamp: SharedMap }
    };

    let container;
    if (mainConfig.isClientSide) {
      // Client-side-only code
      const containerId = window.location.hash.substring(1);
      if (!containerId) {
          ({ container } = await client.createContainer(containerSchema));
          const id = await container.attach();
          window.location.hash = id;
      } else {
          ({ container } = await client.getContainer(containerId, containerSchema));
      }
      return container.initialObjects;
    }
  }

  const [fluidSharedObjects, setFluidSharedObjects] = useState<any>();

  useEffect(() => {
      getFluidData()
      .then(data => setFluidSharedObjects(data));
  }, []);

  const [localTimestamp, setLocalTimestamp] = useState<any>();

useEffect(() => {
    if (fluidSharedObjects) {
    const { sharedTimestamp } = fluidSharedObjects;
    const updateLocalTimestamp = () => setLocalTimestamp({ time: sharedTimestamp.get("time") });
    updateLocalTimestamp();
    sharedTimestamp.on("valueChanged", updateLocalTimestamp);
    return () => { sharedTimestamp.off("valueChanged", updateLocalTimestamp) }
        // TODO 4: Set the value of the localTimestamp state object that will appear in the UI.
        // TODO 5: Register handlers.
        // TODO 6: Delete handler registration when the React App component is dismounted.

    } else {
        return; // Do nothing because there is no Fluid SharedMap object yet.
    }
}, [fluidSharedObjects])

    return (
      localTimestamp ?
        <div className="App">
            <button onClick={() => fluidSharedObjects.sharedTimestamp.set("time", Date.now().toString())}>
                Get Time
            </button>
            <span>{localTimestamp.time}</span>
        </div> :  <div/>
    )
}

