import Button from "@/components/atoms/button";
import React from "react";
import styles from "./Hero-3.module.scss";
import classNames from "classnames";
import Image from "next/image";

// Photo Image Right w/ Title and Body Copy w/ One Button
const Hero3 = ({
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
    <section className={styles.hero3}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.heroContentGrid}>
          <div className={styles.leftSection}>
            <Image
              src={url}
              alt="Hero Illustration"
              className={styles.heroIllustration}
              width={500}
              height={500}
            />
          </div>

          <div className={styles.rightSection}>
            <h1 className="title">{title}</h1>
            <p className="body-copy">{subtitle}</p>
            <Button href={buttonLink}>{buttonText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
