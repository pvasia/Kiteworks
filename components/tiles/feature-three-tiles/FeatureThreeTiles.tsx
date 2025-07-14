import React from "react";
import styles from "./FeatureThreeTiles.module.scss";
import classNames from "classnames";
import FeatureCard, {
  FeatureCardProps,
} from "@/components/molecules/FeatureCard";

export interface FeatureThreeTilesProps {
  items: FeatureCardProps[];
  title?: string;
  subHeading?: string;
}

const FeatureThreeTiles = ({
  items,
  title,
  subHeading,
}: FeatureThreeTilesProps) => {
  return (
    <div className={styles.featureThreeTiles}>
      <div className={classNames(styles.container, "container")}>
        {(title || subHeading) && (
          <div className={styles.header}>
            {title && (
              <h2 className={classNames(styles.title, "title")}>
                {typeof title === "string" ? (
                  <span dangerouslySetInnerHTML={{ __html: title }} />
                ) : (
                  title
                )}
              </h2>
            )}
            {subHeading && (
              <p className={classNames(styles.bodyCopy, "sub-heading")}>
                {typeof subHeading === "string" ? (
                  <span dangerouslySetInnerHTML={{ __html: subHeading }} />
                ) : (
                  subHeading
                )}
              </p>
            )}
          </div>
        )}
        <div className={styles.inner}>
          {items.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureThreeTiles;
