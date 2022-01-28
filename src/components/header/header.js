import React from "react";
import styles from './header.module.scss'
import logo from '../../assets/img/Logo.png';

function Header() {
    return(
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
        </div>
    )
}

export default Header

