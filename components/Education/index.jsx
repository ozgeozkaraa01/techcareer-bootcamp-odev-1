import React from "react";
import styles from "./styles.module.scss";

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Education</h2>
        <div className={styles.contentInner}>
          <div className={styles.innerOne}>
            <div>
              <h3>University Of Colorado Boulder</h3>
              <div className={styles.subheading}>Bachelor Of Science</div>
              <p>Computer Science - Web Development Track</p>
              <p>GPA: 3.23</p>
            </div>
            <div className={styles.date}>
              <p>August 2006 - May 2010</p>
            </div>
          </div>

          <div className={styles.innerTwo}>
            <div>
              <h3>James Buchanan High School</h3>
              <div className={styles.subheading}>TECHNOLOGY MAGNET PROGRAM</div>
              <p>GPA: 3.56</p>
            </div>
            <div className={styles.date}>
              <p>August 2002 - May 2006</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
