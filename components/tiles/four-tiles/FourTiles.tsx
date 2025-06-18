import React from "react";
import styles from "./FourTiles.module.scss";
import classNames from "classnames";

const FourTiles = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.fourTiles}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
};

export default FourTiles;
