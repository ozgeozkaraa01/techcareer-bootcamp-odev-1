import React from "react";
import styles from "./styles.module.scss";
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          CLARENCE
          <span> TAYLOR</span>
        </h1>
        <div className={styles.subheading}>
          3542 BERRY STREET · CHEYENNE WELLS, CO 80810 · (317) 585-8468 ·
          <span> NAME@EMAIL.COM</span>
        </div>
        <p>
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </p>
        <div className={styles.socialIcons}>
          <div className={styles.icon}>
            <FaLinkedinIn />
          </div>
          <div className={styles.icon}>
            <FaGithub />
          </div>
          <div className={styles.icon}>
            <FaTwitter />
          </div>
          <div className={styles.icon}>
            <FaFacebookF />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
