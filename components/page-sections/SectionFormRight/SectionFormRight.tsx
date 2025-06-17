import React from "react";
import styles from "./SectionFormRight.module.scss";
import classNames from "classnames";

const SectionFormRight = ({
  title,
  copy,
  subtitle,
}: {
  title: string | React.ReactNode;
  copy: string | React.ReactNode;
  subtitle: string | React.ReactNode;
}) => {
  return (
    <section className={styles.sectionFormRight}>
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
              <h3 className={styles.subtitle}>
                {typeof subtitle === "string" ? (
                  <span dangerouslySetInnerHTML={{ __html: subtitle }} />
                ) : (
                  subtitle
                )}
              </h3>
              <p className={styles.copy}>
                {typeof copy === "string" ? (
                  <span dangerouslySetInnerHTML={{ __html: copy }} />
                ) : (
                  copy
                )}
              </p>
            </div>
          </div>
          <div className={styles.rightSection}></div>
        </div>
      </div>
    </section>
  );
};

export default SectionFormRight;
