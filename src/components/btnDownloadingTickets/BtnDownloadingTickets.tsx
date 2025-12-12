import type {JSX} from "react";
import styles from "./btnDownloadingTickets.module.scss"
export const BtnDownloadingTickets = (): JSX.Element => {
    return (
        <button type="button" className={styles.btnDownloading}>
            Загрузить еще билеты
        </button>
    );
};