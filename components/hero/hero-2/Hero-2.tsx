import React from "react";
import styles from "./Hero-2.module.scss";
import Button from "@atoms/button";
import classNames from "classnames";

const Hero2 = ({ url }: { url: string }) => {
  return (
    <div>
      <section className={styles.hero2}>
        <div className={classNames(styles.container, "container")}>
          <div className={styles.heroContentGrid}>
            <div className={styles.leftSection}>
              <h1 className="title">Your Private Content Network</h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <Button>Learn more</Button>
            </div>

            <div className={styles.rightSection}>
              <div
                className={styles.heroIllustration}
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
