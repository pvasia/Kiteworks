import Image from "next/image";
import React from "react";
import styles from "./HeroMedium.module.scss";
import classNames from "classnames";

// No Graphic w/ Title and Subtitle Center w/ One Button
const HeroMedium = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <section className={styles.heroMedium}>
      <div className="container">
        <div className={styles.heroContentGrid}>
          <div className={styles.centerSection}>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
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

export default HeroMedium;
