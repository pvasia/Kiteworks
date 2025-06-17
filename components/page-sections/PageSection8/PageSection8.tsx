import React from "react";
import styles from "./PageSection8.module.scss";
import classNames from "classnames";
import Button from "@/components/atoms/Button";
import Image from "next/image";

const PageSection8 = ({
  heading,
  bodyCopy,
}: {
  heading: string | React.ReactNode;
  bodyCopy: string | React.ReactNode;
}) => {
  return (
    <section className={styles.pageSection8}>
      <div className={"container"}>
        <div className={styles.content}>
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
          <Button variant="primary">Read More</Button>
        </div>
      </div>

      <div className={classNames(styles.pattern, styles.pattern1)}>
        <Image src="/images/blue-pattern-4.png" alt="Blue Pattern 4" fill />
      </div>
      <div className={classNames(styles.pattern, styles.pattern2)}>
        <Image src="/images/blue-pattern-5.png" alt="Blue Pattern 5" fill />
      </div>
    </section>
  );
};

export default PageSection8;
