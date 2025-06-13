import React from "react";
import styles from "./Hero-2.module.scss";
import Button from "@atoms/button";
import classNames from "classnames";

// Photo Image Right w/ Title and Subtitle Left w/ One Button
const Hero2 = ({
  url,
  title,
  subtitle,
  buttonText,
  buttonLink,
}: {
  url: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <div>
      <section className={styles.hero2}>
        <div className={classNames(styles.container, "container")}>
          <div className={styles.heroContentGrid}>
            <div className={styles.leftSection}>
              <h1 className="title">{title}</h1>
              <p className="subtitle">{subtitle}</p>
              <Button href={buttonLink}>{buttonText}</Button>
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
