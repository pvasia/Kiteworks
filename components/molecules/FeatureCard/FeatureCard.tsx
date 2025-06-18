import React from "react";
import styles from "./FeatureCard.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Button from "@/components/atoms/Button/Button";

export interface FeatureCardProps {
  variant: "default" | "illustration" | "icon";
  badge?: string;
  imageUrl?: string;
  heading: string;
  bodyCopy: string;
  buttonLabel?: string;
  buttonUrl?: string;
  iconUrl?: string;
}

const FeatureCard = ({
  variant,
  badge,
  imageUrl,
  heading,
  bodyCopy,
  buttonLabel,
  buttonUrl,
  iconUrl,
}: FeatureCardProps) => {
  const isDefault = variant === "default";
  const isIllustration = variant === "illustration";
  const isIcon = variant === "icon";

  return (
    <div className={classNames(styles.featureCard, styles[`${variant}Card`])}>
      <div className={classNames(styles.inner)}>
        {badge && isDefault && <div className={styles.badge}>{badge}</div>}
        {isDefault && imageUrl && (
          <div className={styles.imageWrapper}>
            <Image src={imageUrl} alt={heading} fill className={styles.image} />
          </div>
        )}
        {isIcon && iconUrl && (
          <div className={styles.iconWrapper}>
            <Image src={iconUrl} alt={heading} fill className={styles.icon} />
          </div>
        )}
        <div className={styles.content}>
          {isIllustration && (
            <div className={styles.logoWrapper}>
              <Image
                src="/images/logo.png"
                alt={heading}
                width={100}
                height={20}
                className={styles.logo}
              />
            </div>
          )}
          <h2 className={classNames(styles.heading, "heading")}>
            {typeof heading === "string" ? (
              <span dangerouslySetInnerHTML={{ __html: heading }} />
            ) : (
              heading
            )}
          </h2>
          <p className={classNames(styles.bodyCopy, "body-copy")}>
            {typeof bodyCopy === "string" ? (
              <span dangerouslySetInnerHTML={{ __html: bodyCopy }} />
            ) : (
              bodyCopy
            )}
          </p>
        </div>

        {isIllustration && (
          <div className={styles.illustrationWrapper}>
            <Image
              src="/images/illustration-feature.png"
              alt={"illustration"}
              fill
              className={styles.illustration}
            />
          </div>
        )}
      </div>
      {buttonLabel && buttonUrl && (
        <Button variant="secondary" href={buttonUrl}>
          {buttonLabel}
        </Button>
      )}

      {isIllustration && (
        <>
          <div className={classNames(styles.pattern, styles.pattern1)}>
            <Image
              src="/images/pattern-feature-1.png"
              alt="feature pattern 1"
              fill
            />
          </div>
          <div className={classNames(styles.pattern, styles.pattern2)}>
            <Image
              src="/images/pattern-feature-2.png"
              alt="feature pattern 2"
              fill
            />
          </div>
          <div className={classNames(styles.pattern, styles.pattern3)}>
            <Image
              src="/images/pattern-feature-3.png"
              alt="feature pattern 3"
              fill
            />
          </div>
          <div className={classNames(styles.pattern, styles.pattern4)}>
            <Image
              src="/images/pattern-feature-4.png"
              alt="feature pattern 4"
              fill
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FeatureCard;
