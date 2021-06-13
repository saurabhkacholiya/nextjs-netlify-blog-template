import React from "react";
import styles from "./culture.module.css";
const cultureImage = require("../../../public/DOPUT_02.jpg");
const visionImage = require("../../../public/5.png");

const CultureAndVision = () => {
  return (
    <div className={styles.cultureAndVisionSection}>
      <div className={styles.cultureSection + " row"}>
        <div
          className={styles.flex_center + styles.row_reverse + " col col--6"}
        >
          <h1>What we believe in</h1>
          <div>
            <span style={{ fontSize: 30 }}>D</span>
            <span>ata Obsessed</span>
          </div>
          <div>
            <span style={{ fontSize: 30 }}>O</span>
            <span>wnership</span>
          </div>
          <div>
            <span style={{ fontSize: 30 }}>P</span>
            <span>erformance</span>
          </div>
          <div>
            <span style={{ fontSize: 30 }}>U</span>
            <span>ser first</span>
          </div>
          <div>
            <span style={{ fontSize: 30 }}>T</span>
            <span>ransparency</span>
          </div>
        </div>
        <div className="col col--6" style={{ marginTop: 20 }}>
          <img src={cultureImage} />
        </div>
      </div>
      <div className={styles.visionSection + " row"}>
        <div className="col col--6">
          <img src={visionImage} />
        </div>
        <div className={styles.flex_center + " col col--6"}>
          <h1>Make Sports better</h1>
          <p>
            Dream11, India's biggest fantasy sports platform with 10 Crore+
            users playing Fantasy Cricket, Football, Kabaddi, Basketball,
            Hockey, Volleyball, Baseball and Handball.
          </p>
          <p>
            The brand has partnerships with national and international sports
            leagues & bodies and also with 20+ reputed Indian and international
            cricketers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CultureAndVision;
