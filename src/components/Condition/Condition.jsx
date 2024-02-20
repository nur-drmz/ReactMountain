import React, { useState } from "react";

import styles from "./Condition.module.css";
import { getImageUrl } from "../../utils";

export const Condition = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
        <div>
            <div className={styles.conditionContainer}>
                <h1 className={styles.title}>Today in Beau Mountain</h1>
                <div className={styles.conditionContent}>
                    <p className={styles.conditionText}>Condition</p>
                    <div className={styles.cloudyContainer}>
                        <img src={getImageUrl("condition/Weather.png")} alt="Cloudy" className={styles.cloudyImage} />
                        <p className={styles.cloudyText}>Cloudy sunny</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Condition;