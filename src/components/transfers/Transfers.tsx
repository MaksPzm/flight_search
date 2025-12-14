import {type JSX, useState} from "react";
import styles from "./transfers.module.scss";
import { checkedDefault } from "../defaultValues.ts";
import { type CheckedDefault } from "../../type/type.ts";


const Transfers = (): JSX.Element => {
    const [checkeds, setCheckeds] = useState<CheckedDefault>(checkedDefault);
    // @ts-ignore
    const hadleInput = (position: number) => {
        const updatedCheckedState = checkeds.map((item, index) =>
            index === position ? !item.checked : item.checked
        );
        const newCheckeds = [...checkeds];
        newCheckeds[position].checked = updatedCheckedState[position];
        setCheckeds(newCheckeds)
    }
    return (
        <form className={styles.formTransfers}>
            <h3 className={styles.formTransfers_title}>Количество пересадок</h3>
            {
                checkeds.map((checked, index) => (
                    <label key={checked.id} htmlFor={checked.id} className={styles.formTransfers_label}
                           onChange={() => hadleInput(index)}>
                        <input type="checkbox" defaultChecked={checked.checked} id={checked.id}
                               className={styles.formTransfers_label_checked}
                        />
                        { checked.data }
                    </label>
                ))
            }
        </form>
    );
};

export default Transfers;