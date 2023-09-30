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
            <Link className={styles.navLink} href="#experience">
              Experience
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#education">
              Education
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#skills">
              Skills
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#interests">
              Interests
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="#awards">
              Awards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
