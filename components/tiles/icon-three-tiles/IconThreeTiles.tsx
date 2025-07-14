import React from "react";
import styles from "./IconThreeTiles.module.scss";
import classNames from "classnames";
import IconHeading, {
  IconHeadingProps,
} from "@/components/molecules/IconHeading";

export interface IconThreeTilesProps {
  items: IconHeadingProps[];
  title?: string;
  subHeading?: string;
}

const IconThreeTiles = ({ items, title, subHeading }: IconThreeTilesProps) => {
  console.log("items", items);
  return (
    <div className={styles.iconThreeTiles}>
      <div className={classNames(styles.container, "container")}>
        {(title || subHeading) && (
          <div className={styles.header}>
            {title && (
              <h2 className={classNames(styles.title, "title")}>
                {typeof title === "string" ? (
                  <span dangerouslySetInnerHTML={{ __html: title }} />
                ) : (
                  title
                )}
              </h2>
            )}
            {subHeading && (
              <p className={classNames(styles.bodyCopy, "sub-heading")}>
                {typeof subHeading === "string" ? (
                  <span dangerouslySetInnerHTML={{ __html: subHeading }} />
                ) : (
                  subHeading
                )}
              </p>
            )}
          </div>
        )}
        <div className={styles.inner}>
          {items.map((item, index) => {
            console.log("item", item);
            return <IconHeading key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default IconThreeTiles;
