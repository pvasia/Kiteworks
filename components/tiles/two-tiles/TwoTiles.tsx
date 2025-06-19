import React from "react";
import styles from "./TwoTiles.module.scss";
import classNames from "classnames";

const TwoTiles = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.twoTiles}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
};

export default TwoTiles;
