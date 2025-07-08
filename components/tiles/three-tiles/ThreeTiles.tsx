import React from "react";
import styles from "./ThreeTiles.module.scss";
import classNames from "classnames";

const ThreeTiles = ({
  children,
  title,
  bodyCopy,
}: {
  children: React.ReactNode;
  title?: string;
  bodyCopy?: string;
}) => {
  return (
    <div className={styles.threeTiles}>
      <div className={classNames(styles.container, "container")}>
        {(title || bodyCopy) && (
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
            {bodyCopy && (
              <p className={classNames(styles.bodyCopy, "body-copy")}>
                {typeof bodyCopy === "string" ? (
                  <span dangerouslySetInnerHTML={{ __html: bodyCopy }} />
                ) : (
                  bodyCopy
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

export default ThreeTiles;
