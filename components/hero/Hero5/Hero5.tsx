import Button from "@/components/atoms/Button-backup";
import React from "react";
import styles from "./Hero5.module.scss";
import classNames from "classnames";
import Image from "next/image";

// Photo Image Right w/ Title and Body Copy w/ One Button
const Hero5 = ({
  imageUrl,
  imageAlt = "Hero 5",
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
    <section className={styles.hero5}>
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
            <p className="subtitle">{subtitle}</p>
            <Button href={buttonLink}>{buttonText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
