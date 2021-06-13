import React from "react";
import styles from "./blogcard.module.css";
const blog1Image = require("../../../public/a.jpg");
const blog2Image = require("../../../public/b.jpg");
const blog3Image = require("../../../public/c.jpg");

const renderData = [
  {
    title: "Profiling iOS App Launch Time",
    permalink: "/blog/profiling-ios-app/index.html",
    img: blog1Image,
  },
  {
    title: "Maintaining hyper-sonic releases at Dream11",
    permalink: "/blog/maintaining-hyper-sonic/index.html",
    img: blog2Image,
  },
  {
    title:
      "Finding Order in Chaos: How We Automated Performance Testing with Torque",
    permalink: "/blog/finding-order-in-chaos/index.html",
    img: blog3Image,
  },
];

const BlogSection = () => {
  return (
    <div className={styles.blogSectionContainer}>
      <div>
        <h2>Blogs</h2>
        <p>
          Here are blogs of some of the things we have built using all that open
          source
        </p>
      </div>
      <div className="row" id="blogPost">
        {renderData.map((item) => {
          return (
            <div className="col col--4">
              <a href={`${item.permalink}`} target="_blank">
                <div className={styles.card}>
                  <img className={styles.responsive_img} src={item.img}></img>
                  <div className={styles.titleStyle}>{item.title}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
