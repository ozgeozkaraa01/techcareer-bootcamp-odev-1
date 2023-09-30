import React from "react";
import styles from "./styles.module.scss";

const Interests = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Interests</h2>
        <div>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <div className={styles.space}></div>{" "}
          {/* Paragraflar arasında boşluk */}
          <p>
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interests;
