import React from 'react';

import PlayIcon from "./PlayIcon";
import InfoIcon from "./InfoIcon";

import billboardHeroImg from './assets/billboard.webp';
import billboardHeroTitle from './assets/billboard-title.webp'

import styles from './Billboard.module.css'



const Billboard = () => {

    return (
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src={billboardHeroImg} alt=""/>
                <div className={styles.fadeOut}></div>
                <div className={styles.info}>
                    <img src={billboardHeroTitle} alt="Abstract: The Art of Design"/>
                    <div className={styles.description}>
                        კაროჩე API და JavaScript არ მაქვს, ეგ შენ უნდა მასწავლო :D
                    </div>
                    <div className={styles.links}>
                        <a href="/">
                            <PlayIcon/>
                            <span> Play</span>
                        </a>
                        <button type="button">
                            <InfoIcon/>
                            <span>More Info</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Billboard;