import type {JSX} from "react";
import styles from "./btnDownloadingTickets.module.scss"
import { type BtnDownloadingTicketsPropsComponent } from "../../type/type.ts";

export const BtnDownloadingTickets = (props: BtnDownloadingTicketsPropsComponent): JSX.Element => {
    const { className } =props
    return (
        <button type="button" className={`${className} ${styles.btnDownloading}`}>
            Загрузить еще билеты
        </button>
    );
};