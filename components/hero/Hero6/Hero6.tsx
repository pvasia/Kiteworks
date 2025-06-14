import Button from "@/components/atoms/button";
import React from "react";
import styles from "./Hero6.module.scss";
import classNames from "classnames";
import Image from "next/image";

// Photo Image Right w/ Title and Body Copy w/ One Button
const Hero6 = ({
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
    <section className={styles.hero6}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.heroContentGrid}>
          <div className={styles.leftSection}>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
            <Button href={buttonLink}>{buttonText}</Button>
          </div>

          <div className={styles.rightSection}>
            <Image
              src={imageUrl}
              alt="Hero Illustration"
              className={styles.heroIllustration}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero6;
