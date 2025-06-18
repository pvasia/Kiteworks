import React from "react";
import styles from "./FeatureCard.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Button from "@/components/atoms/Button/Button";

const FeatureCard = ({
  variant,
  badge,
  imageUrl,
  heading,
  bodyCopy,
  buttonLabel,
  buttonUrl,
}: {
  variant: "default" | "illustration";
  badge?: string;
  imageUrl: string;
  heading: string;
  bodyCopy: string;
  buttonLabel?: string;
  buttonUrl?: string;
}) => {
  const isDefault = variant === "default";
  const isIllustration = variant === "illustration";

  return (
    <div className={classNames(styles.featureCard, styles[variant])}>
      <div className={classNames(styles.inner)}>
        {badge && isDefault && <div className={styles.badge}>{badge}</div>}
        {isDefault && (
          <div className={styles.imageWrapper}>
            <Image src={imageUrl} alt={heading} fill className={styles.image} />
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
    </div>
  );
};

export default FeatureCard;
