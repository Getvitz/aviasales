import React from "react";
import styles from './main.module.scss';
import Tabs from "../tabs-filter";
import Ticketslist from "../ticketslist";

export default function Main() {
    return (
        <div className={styles.main}>
            <Tabs />
            <Ticketslist />
            </div>
    )
}