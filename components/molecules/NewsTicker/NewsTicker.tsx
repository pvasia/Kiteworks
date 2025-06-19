import React from "react";
import styles from "./NewsTicker.module.scss";
import classNames from "classnames";

const NewsTicker = ({
  variant,
  text,
}: {
  variant: "breaking-news" | "announcements" | "important";
  text: string;
}) => {
  const Label = () => {
    switch (variant) {
      case "breaking-news":
        return "Breaking News:";
        break;
      case "announcements":
        return "Announcements:";
        break;
      case "important":
        return "Important Updates:";
        break;
      default:
        return "";
    }
  };
  return (
    <div className={classNames(styles.newsTicker, styles[variant])}>
      <div className={classNames(styles.container, "container")}>
        <p className={styles.text}>
          <span className={styles.label}>{Label()}</span> {text}
        </p>
      </div>
    </div>
  );
};

export default NewsTicker;
