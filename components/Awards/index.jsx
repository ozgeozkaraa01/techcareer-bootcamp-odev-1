import React from "react";
import styles from "./styles.module.scss";
import { FaTrophy } from "react-icons/fa";

const Awards = () => {
  return (
    <div className={styles.container}>
      <h2>Awards & Certifications</h2>
      <ul className={styles.listItem}>
        <li>
          <span>
            <FaTrophy />
          </span>
          Google Analytics Certified Developer
        </li>
        <li>
          <span>
            <FaTrophy />
          </span>
          Mobile Web Specialist - Google Certification
        </li>
        <li>
          <span>
            <FaTrophy />
          </span>
          1 st Place - University of Colorado Boulder - Emerging Tech
          Competition 2009
        </li>
        <li>
          <span>
            <FaTrophy />
          </span>
          1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008
          (UI Design Category)
        </li>
        <li>
          <span>
            <FaTrophy />
          </span>
          2 nd Place - University of Colorado Boulder - Emerging Tech
          Competition 2008
        </li>
        <li>
          <span>
            <FaTrophy />
          </span>
          1 st Place - James Buchanan High School - Hackathon 2006
        </li>
        <li>
          <span>
            <FaTrophy />
          </span>
          3 rd Place - James Buchanan High School - Hackathon 2005
        </li>
      </ul>
    </div>
  );
};

export default Awards;
