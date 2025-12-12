import type {JSX} from "react";
import styles from "./transfers.module.scss";
const Transfers = (): JSX.Element => {
    return (
        <form action="" className={styles.formTransfers}>
                <h3 className={styles.formTransfers_title}>Количество пересадок</h3>
                <label htmlFor="withoutTransfers" className={styles.formTransfers_label}>
                    <input type="checkbox" checked={true} id="withoutTransfers" className={styles.formTransfers_label_checked}/>
                    Без пересадок
                </label>
                <label htmlFor="1Transfer" className={styles.formTransfers_label}>
                    <input type="checkbox"  id="1Transfer" className={styles.formTransfers_label_checked}/>
                    1 пересадка
                </label>
                <label htmlFor="2Transfer" className={styles.formTransfers_label}>
                    <input type="checkbox" id="2Transfer" className={styles.formTransfers_label_checked}/>
                    2 пересадки
                </label>
                <label htmlFor="3Transfer" className={styles.formTransfers_label}>
                    <input type="checkbox" id="3Transfer" className={styles.formTransfers_label_checked}/>
                    3 пересадки
                </label>
        </form>
    );
};

export default Transfers;