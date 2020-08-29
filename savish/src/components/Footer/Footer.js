import React from 'react'
import gmail from "../../icons/gmail.svg"
import instagram from "../../icons/instagram.svg"
import twitter from "../../icons/twitter.svg"
import whatsapp from "../../icons/whatsapp.svg"
import styles from "./Footer.module.css"
import classnames from 'classnames';

function Footer() {
    return (
        <footer className={styles.footer}>
        <div className={styles.companyname}>Savishkar</div>
        <div className={styles.explore}>
            <span>Explore</span>
            <div className={styles.sitemap}>
                <div className={classnames(styles.left,styles.column)}>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Artwork</p>
                </div>
                <div className={classnames(styles.rightexplore,styles.column)}>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                </div>
            </div>
        </div>
        <div className={styles.socialmedias}>
            <img src={gmail} alt="gmail icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={whatsapp} alt="whatsapp icon" />
        </div>
    </footer>
    )
}

export default Footer
