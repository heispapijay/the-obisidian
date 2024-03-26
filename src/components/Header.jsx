import React from 'react'
import styles from '../styles/Header.module.css';

export const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.logo}>The Obsidian</h1>
            <div className={styles.nav}>
                <a className={styles.leftpd} href="/">
                    Art/Literature 
                </a>
                <a href="#">
                    Family
                </a>
                <a href="#">
                    About/Submission
                </a>
            </div>
        </div>
    )
}
