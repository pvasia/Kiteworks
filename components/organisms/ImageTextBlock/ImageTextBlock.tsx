import Image from "next/image";
import styles from "./ImageTextBlock.module.scss";
import Button from "@/components/atoms/Button";
import classNames from "classnames";

const ImageTextBlock = ({
  variant,
  image,
  heading,
  bodyCopy,
  buttonLabel,
  buttonUrl,
  imageRight,
}: {
  variant: "border" | "borderless";
  image: string;
  heading: string;
  bodyCopy: string;
  buttonLabel?: string;
  buttonUrl?: string;
  imageRight?: boolean;
}) => {
  return (
    <div
      className={classNames(styles.imageTextBlock, styles[`${variant}Block`], {
        [styles.imageRight]: imageRight,
      })}
    >
      <div className={classNames(styles.container, "container")}>
        <div className={styles.inner}>
          <div className={styles.imageWrapper}>
            <Image src={image} alt={heading} fill className={styles.image} />
          </div>
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
            {buttonLabel && buttonUrl && (
              <Button
                variant={
                  variant === "borderless"
                    ? imageRight
                      ? "tertiary"
                      : "primary"
                    : "secondary"
                }
                href={buttonUrl}
              >
                {buttonLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextBlock;
