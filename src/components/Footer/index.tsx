import React from "react";
import styles from "./styles.module.css";
const fbImg = require("./../../../public/Facebook.jpg");
const instaImg = require("../../../public/instagram.jpg");
const linkedinImg = require("../../../public/Linkedin.jpg");
const twitterImg = require("../../../public/Twitter.jpg");
const telegramImg = require("../../../public/Telegram.jpg");
const youTubeImg = require("../../../public/Youtube.jpg");

export default function Footer() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className={styles.footer_top}>
        <div className={styles.footer_container}>
          <div className={styles.footer_inner}>
            <div className={styles.col1}>
              <div className={styles.left_col1}>
                <div className={styles.footer_logo}>
                  <a href="https://www.dream11.com">
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/landing_page/footer_logo.png"
                      width="134"
                      height="32"
                      alt=""
                    />
                  </a>
                </div>
                <div className={styles.footer_social}>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/Dream11/"
                        target="_blank"
                      >
                        <img
                          className={styles.link_img}
                          src={fbImg}
                          width="32"
                          height="32"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Dream11" target="_blank">
                        <img
                          className={styles.link_img}
                          src={twitterImg}
                          width="32"
                          height="32"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://goo.gl/6uYhhF" target="_blank">
                        <img
                          className={styles.link_img}
                          src={linkedinImg}
                          width="32"
                          height="32"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://youtube.com/dream11" target="_blank">
                        <img
                          className={styles.link_img}
                          src={youTubeImg}
                          width="32"
                          height="32"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/dream11/"
                        target="_blank"
                      >
                        <img
                          className={styles.link_img}
                          src={instaImg}
                          width="32"
                          height="32"
                          alt=""
                        />
                      </a>
                    </li>

                    <li>
                      <a href="https://t.me//dream11_india" target="_blank">
                        <img
                          className={styles.link_img}
                          src={telegramImg}
                          width="32"
                          height="32"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.right_col1}>
                <div className={styles.left_link_list}>
                  <ul>
                    <li>
                      <a
                        href="https://www.dream11.com/download-app"
                        target="_blank"
                      >
                        Download App
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.dream11.com/games/how-to-play"
                        target="_blank"
                      >
                        How to Play
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.dream11.com/games/invite-all-to-play"
                        target="_blank"
                      >
                        Invite Friends
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.dream11.com/fantasy-cricket"
                        target="_blank"
                      >
                        Fantasy Cricket
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.dream11.com/fantasy-football"
                        target="_blank"
                      >
                        Fantasy Football
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.right_link_list}>
                  <ul>
                    <li>
                      <a
                        href="https://about.dream11.in/about-us"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://about.dream11.in/careers"
                        target="_blank"
                      >
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a href="https://get.dream11.help/" target="_blank">
                        Help desk
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.dream11.com/about-us/communityguidelines"
                        target="_blank"
                      >
                        Community Guidelines
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.col2}>
              <div className={styles.membership}>
                <h3>FOUNDING MEMBER</h3>
                <ul>
                  <li>
                    <a
                      href="https://fifs.in/certificates/dream11/"
                      target="_blank"
                    >
                      <img
                        src="https://d11.s3.amazonaws.com/d11-static-pages/images/fifs_footer.png"
                        width="38"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.membership}>
                <h3>PLAY RESPONSIBLY</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.dream11.com/about-us/fairplay"
                      target="_blank"
                    >
                      <img
                        src="https://d11.s3.amazonaws.com/d11-static-pages/images/fp-logo.png"
                        width="38"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={styles.sports_partners_wrapper}
            style={{ display: "none" }}
          >
            <div className={styles.sports_partners}>
              <h3>OFFICIAL FANTASY GAME</h3>
              <div className={styles.top_logos_ipl}>
                <ul>
                  <li className={styles.vivo_ipl_footer}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/landing_page/vivo_ipl_footer.png"
                      width="76"
                      alt=""
                    />
                  </li>
                  <li className={styles.bcci_footer}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/landing_page/bcci_footer.png"
                      width="70"
                      alt=""
                    />
                  </li>
                  <li className={styles.footer_icc_1}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/footer-icc-1.png"
                      width="107"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div className={styles.top_logos}>
                <ul>
                  <li className={styles.footer_nba}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/footer-nba.png"
                      width="66"
                      alt=""
                    />
                  </li>
                  <li className={styles.footer_pkl}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/footer-pkl.png"
                      width="78"
                      alt=""
                    />
                  </li>

                  <li className={styles.La_Liga_footer_new}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/landing_page/La_Liga_footer_new.png"
                      width="43"
                      alt=""
                    />
                  </li>
                  <li className={styles.footer_fih_1}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/footer-fih-1.png"
                      width="74"
                      alt=""
                    />
                  </li>
                  <li className={styles.footer_hero_new}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/landing_page/footer-hero-new.png"
                      width="47"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div className={styles.bottom_logos}>
                <ul>
                  <li className={styles.footer_bbl}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/footer-bbl.png"
                      width="48"
                      alt=""
                    />
                  </li>
                  <li className={styles.nzc_footer}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/landing_page/nzc_footer.png"
                      width="57"
                      alt=""
                    />
                  </li>
                  <li className={styles.footer_cpl}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/footer-cpl.png"
                      width="105"
                      alt=""
                    />
                  </li>
                  <li className={styles.supersmash_footer}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/landing_page/supersmash_footer.png"
                      width="63"
                      alt=""
                    />
                  </li>
                  <li className={styles.abu_dhabi_footer_new1}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/contain/newsletter/template-04-03-16/abu_dhabi_footer_new1.png"
                      width="50"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div className={styles.bottom_logos}>
                <ul id="footer_second_ul">
                  <li className={styles.MSL_footer_new}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/landing_page/MSL_footer_new.png"
                      width="71"
                      alt=""
                    />
                  </li>
                  <li className={styles.ECL_footer}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/landing_page/ECL_footer.png"
                      width="60"
                      alt=""
                    />
                  </li>
                  <li className={styles.t20_mumbai_logo_new1}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/contain/newsletter/template-04-03-16/t20-mumbai-logo_new1.png"
                      width="77"
                      alt=""
                    />
                  </li>
                  <li className={styles.kpl_footer}>
                    <img
                      src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/landing_page/kpl_footer.png"
                      width="71"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.office_address}>
            <h3>CORPORATE OFFICE</h3>
            <div className={styles.address}>
              Unit No.1802, 18th Floor, Tower B, Peninsula Business Park, Off
              Senapati Bapat Marg, Lower Parel, Mumbai 400013
            </div>
          </div>
          <div className={styles.disclaimer_box} style={{ display: "none" }}>
            <h3>DISCLAIMER</h3>
            <div className={styles.disclaimer}>
              Unless otherwise explicitly specified, Dream11 is not affiliated
              in any way to and claims no association, in any capacity
              whatsoever, with any sports governing bodies and leagues,
              including, but not limited to the Board of Control for Cricket in
              India (BCCI) or the Indian Premier League (IPL).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
