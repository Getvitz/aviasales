import React from "react";
import styles from './main.module.scss';
import Sort from "../sort";
import Ticketslist from "../ticketslist";

export default function Main() {
    return (
        <div className={styles.main}>
            <Sort />
            <Ticketslist />
            </div>
    )
}