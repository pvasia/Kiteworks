import React from "react";
import Button from "@/components/atoms/Button";
import styles from "./not-found.module.scss";
import classNames from "classnames";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={classNames(styles.title, "title")}>Page Not Found</h1>
        <p className={classNames(styles.description, "body-copy")}>
          Sorry, the page you&apos;re looking for doesn&apos;t exist. It might
          have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className={styles.actions}>
          <Button href="/" variant="primary" size="medium">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
