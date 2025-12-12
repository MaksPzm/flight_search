import type {JSX} from "react";
import { Headline } from "../headline/Hedline.tsx";
import { Wrapper } from "../wrapper/Wrapper.tsx";
import { defaultState, createStoreLayout } from "../createStore/CreateStore.ts";

export const Layout = (): JSX.Element => {
    return (
        <createStoreLayout.Provider value={defaultState}>
            <div className="layout">
                <Headline />
                <Wrapper />
            </div>
        </createStoreLayout.Provider>
    );
};