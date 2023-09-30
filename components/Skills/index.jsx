import React from "react";
import styles from "./styles.module.scss";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaAngular,
  FaReact,
  FaNodeJs,
  FaSass,
  FaLess,
  FaWordpress,
  FaGulp,
  FaGrunt,
  FaNpm,
  FaCheck,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Skills</h2>
        <div className={styles.subheading}>Programming Languages & Tools</div>
        <ul className={styles.skillsList}>
          <li>
            <FaHtml5 />
          </li>
          <li>
            <FaCss3 />
          </li>
          <li>
            <FaJsSquare />
          </li>
          <li>
            <FaAngular />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <FaNodeJs />
          </li>
          <li>
            <FaSass />
          </li>
          <li>
            <FaLess />
          </li>
          <li>
            <FaWordpress />
          </li>
          <li>
            <FaGulp />
          </li>
          <li>
            <FaGrunt />
          </li>
          <li>
            <FaNpm />
          </li>
        </ul>
        <div className={styles.subheading}>Workflow</div>
        <ul className={styles.list}>
          <li>
            <span>
              <FaCheck />
            </span>
            Mobile-First, Responsive Design
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            MERN Stack development & Debugging
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            Cross Functional Teams
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            Agile Development & Scrum
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
