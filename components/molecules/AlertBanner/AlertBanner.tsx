import Link from "next/link";
import classNames from "classnames";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import styles from "./AlertBanner.module.scss";

interface AlertBannerProps {
  type: "news" | "announcement" | "info";
  message: string;
  link?: string;
  linkText?: string;
}

const AlertBanner = ({
  type,
  message,
  link,
  linkText = "Learn More",
}: AlertBannerProps) => {
  return (
    <div className={styles.alert} data-type={type}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.alertContent}>
          <ShieldCheckIcon className={styles.alertIcon} />
          <span className={styles.alertText}>{message}</span>
          {link && (
            <Link href={link} className={styles.alertLink}>
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;
