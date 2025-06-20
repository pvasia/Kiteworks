import React from "react";
import styles from "./LogoBlocks.module.scss";
import classNames from "classnames";
import Image from "next/image";

interface LogoBlocksProps {
  variant: "heading" | "grid-primary" | "grid-secondary";
  logos: {
    image: string;
    alt: string;
    url: string;
  }[];
}

const LogoBlocks = ({ variant, logos }: LogoBlocksProps) => {
  return (
    <div className={classNames(styles.logoBlocks, styles[variant])}>
      {variant === "heading" && (
        <div className={styles.heading}>
          <div className={classNames(styles.container, "container")}>
            <h2 className={classNames(styles.subtitle, "subtitle")}>
              CISOs and CIOs at more than 2,500 of the world’s leading
              enterprises and government agencies trust Kiteworks.
            </h2>
          </div>
          <div className={classNames(styles.pattern, styles.pattern1)}>
            <Image src="/images/pattern-logoblock-1.png" alt="Pattern 1" fill />
          </div>
          <div className={classNames(styles.pattern, styles.pattern2)}>
            <Image src="/images/pattern-logoblock-2.png" alt="Pattern 2" fill />
          </div>
        </div>
      )}

      {variant === "grid-primary" && (
        <div className={styles.gridPrimary}>
          <div className={classNames(styles.container, "container")}>
            <div className={styles.grid}>
              {logos.map((logo) => (
                <div className={styles.item} key={logo.alt}>
                  <Image
                    src={logo.image}
                    alt={logo.alt}
                    fill
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {variant === "grid-secondary" && (
        <div className={styles.gridSecondary}>
          <div className={classNames(styles.container, "container")}>
            <div className={styles.grid}>
              {logos.map((logo) => (
                <div className={styles.item} key={logo.alt}>
                  <Image
                    src={logo.image}
                    alt={logo.alt}
                    fill
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoBlocks;
