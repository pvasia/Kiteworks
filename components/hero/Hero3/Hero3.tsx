import Button from "@/components/atoms/Button";
import React from "react";
import styles from "./Hero3.module.scss";
import classNames from "classnames";
import Image from "next/image";

// Photo Image Right w/ Title and Body Copy w/ One Button
const Hero3 = ({
  imageUrl,
  imageAlt = "Hero 3",
  title,
  subtitle,
  buttonText,
  buttonLink,
}: {
  imageUrl: string;
  imageAlt?: string;
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
              src={imageUrl}
              alt={imageAlt}
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
