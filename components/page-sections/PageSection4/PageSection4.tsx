import React from "react";
import styles from "./PageSection4.module.scss";
import Image from "next/image";
import classNames from "classnames";

const PageSection4 = ({
  title,
  copy,
  imageUrl,
  imageAlt = "Page Section 4",
}: {
  title: string | React.ReactNode;
  copy: string | React.ReactNode;
  imageUrl: string;
  imageAlt?: string;
}) => {
  return (
    <section className={styles.pageSection4}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <div className={styles.inner}>
              <h2 className={styles.title}>
                {typeof title === "string" ? (
                  <span dangerouslySetInnerHTML={{ __html: title }} />
                ) : (
                  title
                )}
              </h2>
              <p className={styles.copy}>
                {typeof copy === "string" ? (
                  <span dangerouslySetInnerHTML={{ __html: copy }} />
                ) : (
                  copy
                )}
              </p>
            </div>
          </div>
          <div className={styles.rightSection}>
            <Image
              src={imageUrl}
              alt={imageAlt}
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

export default PageSection4;
