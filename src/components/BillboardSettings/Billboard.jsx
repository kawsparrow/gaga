import React from 'react';
import styles from './Billboard.module.css';

import SettingsIcon from "./SettingsIcon";


const BillboardSettings = () => {
    return (
        <div className={styles.billboardSettings}>
            <SettingsIcon />

        </div>
    );
};

export default BillboardSettings;