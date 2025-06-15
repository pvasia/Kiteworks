import React from "react";
import styles from "./PageSection2.module.scss";
import Image from "next/image";
import classNames from "classnames";

const PageSection2 = ({
  title,
  copy,
}: {
  title: string | React.ReactNode;
  copy: string | React.ReactNode;
}) => {
  return (
    <section className={styles.pageSection2}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <div className={styles.inner}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.copy}>{copy}</p>
            </div>
          </div>
          <div className={styles.rightSection}>
            <Image
              src="/images/section-2.png"
              alt="Page Section 2"
              width={480}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageSection2;
