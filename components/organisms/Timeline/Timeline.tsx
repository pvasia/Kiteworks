import React from "react";
import styles from "./Timeline.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

interface TimelineItem {
  title: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
  contentTitle?: string;
  contentDescription?: string;
}

interface TimelineProps {
  variant: "horizontal" | "vertical";
  items: TimelineItem[];
  title?: string;
  bodyCopy?: string;
}

const Timeline = ({ variant, items, title, bodyCopy }: TimelineProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });
  const variantHandler = isMobile ? "vertical" : variant;

  return (
    <div className={classNames(styles.timeline, styles[variantHandler])}>
      <div className={styles.timelineHeader}>
        <div className={classNames(styles.container, "container")}>
          {(title || bodyCopy) && (
            <div className={styles.header}>
              {title && (
                <h2 className={classNames(styles.title, "title")}>{title}</h2>
              )}
              {bodyCopy && (
                <p className={classNames(styles.bodyCopy, "body-copy")}>
                  {bodyCopy}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className={styles.timelineInner}>
        <div className={styles.timelineLine}></div>
        <div className={styles.timelineBox}></div>
        <div className={classNames(styles.container, "container")}>
          <div className={styles.timelineContainer}>
            {items.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineContentMain}>
                    <h3 className={classNames(styles.itemTitle, "heading")}>
                      {item.title}
                    </h3>
                    <p
                      className={classNames(
                        styles.itemDescription,
                        "body-copy"
                      )}
                    >
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

                    <div className={styles.timelinePattern}>
                      <Image
                        src="/images/pattern-timeline.png"
                        alt="Timeline pattern"
                        fill
                      />
                    </div>
                  </div>
                  <div className={styles.timelineContentSide}>
                    {item.contentTitle && (
                      <h3 className={classNames(styles.itemTitle, "heading")}>
                        {item.contentTitle}
                      </h3>
                    )}
                    {item.contentDescription && (
                      <p
                        className={classNames(
                          styles.itemDescription,
                          "body-copy"
                        )}
                      >
                        {item.contentDescription}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
