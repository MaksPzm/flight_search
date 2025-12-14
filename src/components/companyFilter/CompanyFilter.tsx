import styles from "./companyFilter.module.scss";
import {type JSX, useContext} from "react";
import {createStoreLayout} from "../createStore/CreateStore.ts";

const CompanyFilter = (): JSX.Element => {
    const valueStore = useContext(createStoreLayout);
    return (
        <form className={styles.companyFilter}>
            <h3 className={styles.companyFilter__title}>Компании</h3>
            <div className={styles.companyFilter__company}>
                {
                    valueStore[0].map(item => (
                        <label htmlFor={`${item.company}-${item.id}`}
                               key={`${item.company}-${item.id}`}
                               className={styles.companyFilter__company_label}
                        >
                            <input type="checkbox" className={styles.companyFilter__company_label_checked}
                                   id={`${item.company}-${item.id}`}
                                   defaultChecked={true}
                            />
                            {
                                item.company
                            }
                        </label>
                    ))
                }
            </div>
        </form>
    );
};

export default CompanyFilter;