import React from "react";
import styles from "./FourTiles.module.scss";
import classNames from "classnames";

const FourTiles = ({
  children,
  title,
  subHeading,
}: {
  children: React.ReactNode;
  title?: string;
  subHeading?: string;
}) => {
  return (
    <div className={styles.fourTiles}>
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
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
};

export default FourTiles;
