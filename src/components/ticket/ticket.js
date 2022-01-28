import React from "react";
import styles from './ticket.module.scss';

export default function Ticket() {
    return (
        <div className={styles.ticket}>
            <header className={styles.header}>
                <div className={styles.price}>13 400</div>
                <img className={styles.logo} alt="aviacompany-logo" src="#" />
            </header>
            <div className={styles.ticket_info}>
                <div className={styles.ticket_info_main}>MOW-HKT</div>
                <div className={styles.ticket_info_main}>В ПУТИ</div>
                <div className={styles.ticket_info_main}>1 ПЕРСАДКА</div>
                <div className={styles.ticket_info_details}>09:15 - 04:04</div>
                <div className={styles.ticket_info_details}>19ч 49м</div>
                <div className={styles.ticket_info_details}>IST</div>
            </div>
            <div className={styles.ticket_info}>
                <div className={styles.ticket_info_main}>HKT-MOW</div>
                <div className={styles.ticket_info_main}>В ПУТИ</div>
                <div className={styles.ticket_info_main}>0 ПРЕСАДОК</div>
                <div className={styles.ticket_info_details}>18:36 - 15:09</div>
                <div className={styles.ticket_info_details}>21ч 33м</div>
                <div className={styles.ticket_info_details}>#</div>
            </div>
        </div>
    )
}