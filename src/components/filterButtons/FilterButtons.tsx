import {type JSX} from "react";
import styles from "./filterButtons.module.scss";
import * as React from "react";

export const FilterButtons = (): JSX.Element => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        const btnElement: HTMLButtonElement = e.currentTarget as HTMLButtonElement;
        const btn = document.querySelectorAll(".filterButtons__btn");
        btn.forEach(btn => {
            btn.classList.remove(`${styles.button__active}`);
            btnElement.classList.add(`${styles.button__active}`);
        })
    }
    return (
        <div className={`filterButtons ${styles.filterButtons}`}>
            <button type="button"
                    className={`filterButtons__btn ${styles.button} ${styles.button__active}`}
                    onClick={handleClick}>
                Самый дешёвый
            </button>
            <button type="button" className={`filterButtons__btn ${styles.button}`}
                    onClick={handleClick}>
                Самый быстрый
            </button>
            <button type="button" className={`filterButtons__btn ${styles.button}`}
                    onClick={handleClick}>
                Самый оптимальный
            </button>
        </div>
    );
};