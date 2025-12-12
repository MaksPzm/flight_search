import {type JSX, useContext} from "react";
import styles from "./tickets.module.scss";
import { createStoreLayout} from "../components/createStore/CreateStore.ts";
import type { TicketsPropsComponent } from "../type/type.ts";

export const Tickets = (props: TicketsPropsComponent): JSX.Element => {
    const { className } = props;
    const valueStore = useContext(createStoreLayout)
    console.log(valueStore)
    return (
        <div className={`tickets ${styles.tickets}`}>
            {
                valueStore[0].map(ticket => (
                    <div key={ticket.id} id={`${ticket.id}`} className={`${className} ${styles.ticket}`}>
                        <div className={styles.ticket__article}>
                            <span className={styles.ticket__article_price}>{`${ticket.price} Р`}</span>
                            <img className={styles.ticket__article_img} src={ticket.icon} alt="icon"/>
                        </div>
                        <div className={styles.ticket__blockInfo}>
                            <div className={styles.ticket__blockInfo_section}>
                                <span className={styles.ticket__blockInfo_section_sp}>SVO - LED</span>
                                <span className={styles.ticket__blockInfo_section_info}>{ticket.time}</span>
                            </div>
                            <div className={styles.ticket__blockInfo_section}>
                                <span className={styles.ticket__blockInfo_section_sp}>В пути</span>
                                <span className={styles.ticket__blockInfo_section_info}>{`${ticket.wayClock} ч ${ticket.wayMinutes} минут`}</span>
                            </div>
                            <div className={styles.ticket__blockInfo_section}>
                                <span className={styles.ticket__blockInfo_section_sp}>Пересадки</span>
                                <span className={styles.ticket__blockInfo_section_info}>{ticket.connectionAmount}</span>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};