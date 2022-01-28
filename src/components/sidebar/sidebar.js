import React from "react";
import styles from './sidebar.module.scss';
import Filter from "../filter";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Filter />
        </div>
    )
}