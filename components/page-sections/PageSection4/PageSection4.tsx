import React from "react";
import styles from "./PageSection4.module.scss";
import Image from "next/image";
import classNames from "classnames";

const PageSection4 = ({
  heading,
  bodyCopy,
  imageUrl,
  imageAlt = "Page Section 4",
}: {
  heading: string | React.ReactNode;
  bodyCopy: string | React.ReactNode;
  imageUrl: string;
  imageAlt?: string;
}) => {
  return (
    <section className={styles.pageSection4}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <div className={styles.inner}>
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
