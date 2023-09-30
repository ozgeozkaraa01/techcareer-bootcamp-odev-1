import React from "react";
import styles from "./styles.module.scss";

const Experience = () => {
  return (
    <div className={styles.container}>
      <h2>Experience</h2>
      <div className={styles.contentInner}>
        <div className={styles.contentOne}>
          <div className={styles.left}>
            <h3>SENIOR WEB DEVELOPER</h3>
            <div className={styles.subheading}>INTELITEC SOLUTIONS</div>
            <p>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
            </p>
          </div>
          <div className={styles.date}>
            <p>March 2013 - Present</p>
          </div>
        </div>
        <div className={styles.contentTwo}>
          <div className={styles.left}>
            <h3>WEB DEVELOPER</h3>
            <div className={styles.subheading}>INTELITEC SOLUTIONS</div>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line.
            </p>
          </div>
          <div className={styles.date}>
            <p>December 2011 - March 2013</p>
          </div>
        </div>
        <div className={styles.contentThree}>
          <div className={styles.left}>
            <h3>JUNIOR WEB DESIGNER</h3>
            <div className={styles.subheading}>SHOUT! MEDIA PRODUCTIONS</div>
            <p>
              Podcasting operational change management inside of workflows to
              establish a framework. Taking seamless key performance indicators
              offline to maximise the long tail. Keeping your eye on the ball
              while performing a deep dive on the start-up mentality to derive
              convergence on cross-platform integration.
            </p>
          </div>
          <div className={styles.date}>
            <p>July 2010 - December 2011</p>
          </div>
        </div>
        <div className={styles.contentFour}>
          <div className={styles.left}>
            <h3>WEB DESIGN INTERN</h3>
            <div className={styles.subheading}>SHOUT! MEDIA PRODUCTIONS</div>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
          </div>
          <div className={styles.date}>
            <p>September 2008 - June 2010</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
