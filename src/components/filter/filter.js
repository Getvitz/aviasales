import React from "react";
import styles from './filter.module.scss';

export default function Filter() {
    return (
        <ul className={styles.filter}>
            <li className={styles.header}>КОЛИЧЕСТВО ПЕРЕСАДОК</li>
            <li className={styles.filter_item}>
                <input className={styles.checkbox} type="checkbox" id="all" name="All"/>
                <label className={styles.label} htmlFor="all">Все</label>
            </li>
            <li className={styles.filter_item}>
                <input className={styles.checkbox} type="checkbox" id="no-transfer" name="No-transfer"/>
                <label className={styles.label} htmlFor="no-transfer">Без пересадок</label>
            </li>
            <li className={styles.filter_item}>
                <input className={styles.checkbox} type="checkbox" id="one-transfer" name="One"/>
                <label className={styles.label} htmlFor="one-transfer">1 пересадка</label>
            </li>
            <li className={styles.filter_item}>
                <input className={styles.checkbox} type="checkbox" id="two-transfer" name="Two"/>
                <label className={styles.label} htmlFor="two-transfer">2 пересадки</label>
            </li>
            <li className={styles.filter_item}>
                <input className={styles.checkbox} type="checkbox" id="three-transfer" name="Three"/>
                <label className={styles.label} htmlFor="three-transfer">3 пересадки</label>
            </li>
         
        </ul>
    )
}