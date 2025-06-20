import React from "react";
import styles from "./Timeline.module.scss";
import classNames from "classnames";

interface TimelineItem {
  title: string;
  description: string;
  date?: string;
  link?: {
    text: string;
    url: string;
  };
}

interface TimelineProps {
  variant: "horizontal" | "vertical";
  items: TimelineItem[];
  heading?: string;
  bodyCopy?: string;
}

const Timeline = ({ variant, items, heading, bodyCopy }: TimelineProps) => {
  return (
    <div className={classNames(styles.timeline, styles[variant])}>
      <div className={classNames(styles.container, "container")}>
        {(heading || bodyCopy) && (
          <div className={styles.header}>
            {heading && (
              <h2 className={classNames(styles.heading, "heading")}>
                {heading}
              </h2>
            )}
            {bodyCopy && (
              <p className={classNames(styles.bodyCopy, "body-copy")}>
                {bodyCopy}
              </p>
            )}
          </div>
        )}

        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>

          {items.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h3 className={classNames(styles.itemTitle, "h3")}>
                  {item.title}
                </h3>
                {item.date && (
                  <div className={styles.itemDate}>{item.date}</div>
                )}
                <p className={classNames(styles.itemDescription, "body-copy")}>
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link.url}
                    className={classNames(styles.itemLink, "link")}
                  >
                    {item.link.text}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
