import Image from "next/image";
import React from "react";
import styles from "./Hero8.module.scss";
import Button from "@/components/atoms/button";
import classNames from "classnames";

// Full Background Image w/ Title and Subtitle Center w/ One Button
const Hero8 = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  buttonLink,
}: {
  imageUrl: string;
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <section
      className={styles.hero8}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="container">
        <div className={styles.heroContentGrid}>
          <div className={styles.centerSection}>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
            <Button className="blue-on-hover" href={buttonLink}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>

      <Image
        src="/images/pattern-transparent-1.png"
        alt="Transparent pattern 1"
        width={240}
        height={240}
        className={classNames(styles.pattern, styles.pattern1)}
      />

      <Image
        src="/images/pattern-transparent-2.png"
        alt="Transparent pattern 2"
        width={300}
        height={260}
        className={classNames(styles.pattern, styles.pattern2)}
      />
    </section>
  );
};

export default Hero8;
