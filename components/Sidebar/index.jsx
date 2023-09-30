import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Sidebar = () => {
  return (
    <nav className={styles.container}>
      <img src="/assets/profile.jpg" alt="profile-img" />
      <div className={styles.navList}>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#about">
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/">
              Experience
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/">
              Education
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/">
              Skills
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/">
              Interests
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/">
              Awards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
