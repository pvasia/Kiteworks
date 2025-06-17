import Image from "next/image";
import React from "react";
import styles from "./Hero7.module.scss";
import Button from "@/components/atoms/Button";
import classNames from "classnames";

// No Graphic w/ Title and Subtitle Center w/ One Button
const Hero7 = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <section className={styles.hero7}>
      <div className="container">
        <div className={styles.heroContentGrid}>
          <div className={styles.centerSection}>
            <h1 className="title">
              {typeof title === "string" ? (
                <span dangerouslySetInnerHTML={{ __html: title }} />
              ) : (
                title
              )}
            </h1>
            <p className="subtitle">
              {typeof subtitle === "string" ? (
                <span dangerouslySetInnerHTML={{ __html: subtitle }} />
              ) : (
                subtitle
              )}
            </p>
            <Button className="blue-on-hover" href={buttonLink}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>

      <Image
        src="/images/blue-pattern-1.png"
        alt="Blue pattern 1"
        width={220}
        height={212}
        className={classNames(styles.pattern, styles.pattern1)}
      />

      <Image
        src="/images/blue-pattern-2.png"
        alt="Blue pattern 2"
        width={160}
        height={202}
        className={classNames(styles.pattern, styles.pattern2)}
      />

      <Image
        src="/images/blue-pattern-3.png"
        alt="Blue pattern 3"
        width={412}
        height={278}
        className={classNames(styles.pattern, styles.pattern3)}
      />
    </section>
  );
};

export default Hero7;
