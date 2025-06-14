import Image from "next/image";
import React from "react";
import styles from "./HeroSmall.module.scss";
import classNames from "classnames";

// No Graphic w/ Title and Subtitle Center w/ One Button
const HeroSmall = ({ title }: { title: string }) => {
  return (
    <section className={styles.heroSmall}>
      <div className="container">
        <div className={styles.heroContentGrid}>
          <div className={styles.centerSection}>
            <h1 className={classNames(styles.title, "title")}>{title}</h1>
          </div>
        </div>
      </div>

      <Image
        src="/images/blue-pattern-internal-1.png"
        alt="Blue pattern 1"
        width={285}
        height={273}
        className={classNames(styles.pattern, styles.pattern1)}
      />

      <Image
        src="/images/blue-pattern-internal-2.png"
        alt="Blue pattern 2"
        width={128}
        height={130}
        className={classNames(styles.pattern, styles.pattern2)}
      />

      <div className={classNames(styles.rectangle, styles.rectangle1)}></div>
      <div className={classNames(styles.rectangle, styles.rectangle2)}></div>
    </section>
  );
};

export default HeroSmall;
