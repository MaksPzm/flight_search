import type {JSX} from "react";
import { Aside } from "../../aside/Aside.tsx";
import {FilterButtons} from "../filterButtons/FilterButtons.tsx";
import {Tickets} from "../../tickets/Tickets.tsx";
import {BtnDownloadingTickets} from "../btnDownloadingTickets/BtnDownloadingTickets.tsx";

export const Wrapper = (): JSX.Element => {
    return (
        <div className="wrapper">
            <Aside />
            <div className="wrapper__main">
                <FilterButtons />
                <Tickets className={"tickets"}/>
                <BtnDownloadingTickets className={"btnDownloading"} />
            </div>
        </div>
    );
};