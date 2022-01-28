import React from "react";
import styles from './tabs-filter.module.scss';

export default function Tabs() {
    return (
        <ul className={styles.tabs}>
            <li className={styles.tab}><span>САМЫЙ ДЕШЕВЫЙ</span></li>
            <li className={styles.tab}>САМЫЙ БЫСТРЫЙ</li>
            <li className={styles.tab}>ОПТИМАЛЬНЫЙ</li>
        </ul>
    )
}