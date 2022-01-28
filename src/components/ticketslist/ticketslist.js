import React from "react";
import styles from './ticketslist.module.scss';
import Ticket from "../ticket";

export default function Ticketslist() {
    return (
        <div className={styles.ticketslist}>
            <Ticket />
            <Ticket />
            <button type="button" className={styles.button}>
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
            </button>
        </div>
    )
}