import React from "react";
import styles from "./PageSection1.module.scss";
import Image from "next/image";
import classNames from "classnames";

const PageSection1 = ({
  title,
  copy,
}: {
  title: string | React.ReactNode;
  copy: string | React.ReactNode;
}) => {
  return (
    <section className={styles.pageSection1}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <Image
              src="/images/section-1.png"
              alt="Page Section 1"
              width={480}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.rightSection}>
            <div className={styles.inner}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.copy}>{copy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageSection1;
