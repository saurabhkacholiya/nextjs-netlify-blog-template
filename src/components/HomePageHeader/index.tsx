import React from "react";
import styles from "./homepage.module.css";
const mobileImg = require("../../../public/mobileImg.jpg");

export default function HomepageHeader() {
  return (
    <div className={(styles.hero, styles.shadow, styles.back_img_div)}>
      <div className={styles.showMobileImage}>
        <img style={{ width: "100%" }} src={mobileImg}></img>
      </div>
      <div className={styles.container}>
        <h1 className={styles.hero__title}>
          Millions of users comes with great Engineering
        </h1>
        <p className={styles.hero__subtitle}>lorem ipsum</p>
        <div>
          <button className="button button--secondary button--outline button--lg">
            <a href="#jobs">Join Us</a>
          </button>
        </div>
      </div>
    </div>
  );
}
