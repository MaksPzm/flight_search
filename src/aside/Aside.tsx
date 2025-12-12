import type {JSX} from "react";
import Transfers from "../components/transfers/Transfers.tsx";

export const Aside = (): JSX.Element => {
    return (
        <div className="aside">
            <Transfers />
        </div>
    );
};