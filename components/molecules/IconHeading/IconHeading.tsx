import Image from "next/image";
import React from "react";
import styles from "./IconHeading.module.scss";
import classNames from "classnames";
import Button from "@/components/atoms/Button/Button";

export interface IconHeadingProps {
  icon: string;
  heading: string | React.ReactNode;
  bodyCopy: string | React.ReactNode;
  buttonLabel?: string;
  buttonUrl?: string;
}

const IconHeading = ({
  icon,
  heading,
  bodyCopy,
  buttonLabel,
  buttonUrl,
}: IconHeadingProps) => {
  return (
    <div className={styles.iconHeading}>
      <div className={styles.icon}>
        <Image src={icon} alt="Icon" width={50} height={50} />
      </div>
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

      {buttonLabel && buttonUrl && (
        <Button variant="link" href={buttonUrl}>
          {buttonLabel}
        </Button>
      )}
    </div>
  );
};

export default IconHeading;
