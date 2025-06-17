import React from "react";
import styles from "./Hero1.module.scss";
import Button from "@/components/atoms/Button";
import classNames from "classnames";

// Photo Image Left w/ Title and Subtitle Right w/ One Button
const Hero1 = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  buttonLink,
}: {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <div>
      <section className={styles.hero1}>
        <div className={classNames(styles.container, "container")}>
          <div className={styles.heroContentGrid}>
            <div className={styles.leftSection}>
              <div
                className={styles.heroIllustration}
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            </div>

            <div className={styles.rightSection}>
              <h1 className="title">{title}</h1>
              <p className="subtitle">{subtitle}</p>
              <Button href={buttonLink}>{buttonText}</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
