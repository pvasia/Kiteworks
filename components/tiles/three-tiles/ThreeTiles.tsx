import React from "react";
import styles from "./ThreeTiles.module.scss";
import classNames from "classnames";

const ThreeTiles = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.threeTiles}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
};

export default ThreeTiles;
