import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>THE BEAUTY OF</h1>
          <h1 className={styles.subtitle}>BEAU MOUNTAIN</h1>
          <img className={styles.coverimg} src={getImageUrl("hero/aftertext.png")} alt="coverimg"/>
        </div> 
        <div className={styles.playButtonContainer}>
          <img className={styles.playButton} src={getImageUrl("hero/play-button.png")} alt="Play Button"/>
        </div>
        <div className={styles.videoSection}>
          <div className={styles.videoCard}>
            <img className={styles.videoImage} src={getImageUrl("hero/Image.png")} alt="Camp Image"/>
            <div className={styles.videoDetails}>
              <span className={styles.videoIcon} src={getImageUrl("hero/Arrow 1.svg")} alt="arrow"></span>
              <p className={styles.videoCaption}>See Video</p>
            </div>
          </div>
          <div className={styles.videoDescription}>
            <h2 className={styles.videoTitle}>Camp Exploration</h2>
            <p className={styles.videoText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Quisque tincidunt malesuada odio, vel pellentesque risus fermentum vel.
            </p>
          </div>
          <div className={styles.tentImage}>
            <img src={getImageUrl("hero/tent-img.png")} alt="Tent Image" />
            <p className={styles.blogText}>Our Blog</p>
          </div>
        </div>
        
    </section>
  );
};
