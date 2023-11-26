'use client'
import { Provider } from "react-redux";
import { createReduxStore } from "./store";

function Providers({children}: any) {
    return <Provider store={createReduxStore()}>{children}</Provider>;
}

export default Providers;