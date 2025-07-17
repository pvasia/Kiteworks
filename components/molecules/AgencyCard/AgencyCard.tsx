import React from "react";
import Link from "next/link";
import styles from "./AgencyCard.module.scss";
import classNames from "classnames";
import {
  ShieldCheckIcon,
  HomeIcon,
  ScaleIcon,
  EyeIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export interface AgencyCardProps {
  name: string;
  description: string;
  url: string;
  icon: string;
}

const iconMap = {
  ShieldCheckIcon: <ShieldCheckIcon />,
  HomeIcon: <HomeIcon />,
  ScaleIcon: <ScaleIcon />,
  EyeIcon: <EyeIcon />,
  HeartIcon: <HeartIcon />,
};

const AgencyCard: React.FC<AgencyCardProps> = ({
  name,
  description,
  url,
  icon,
}) => {
  return (
    <Link href={url} className={classNames(styles.agencyCard)}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          {iconMap[icon as keyof typeof iconMap]}
        </div>
        <div className={styles.agencyInfo}>
          <h3 className={classNames(styles.agencyName, "heading")}>{name}</h3>
        </div>
      </div>

      <div className={styles.cardBody}>
        <p className={classNames(styles.description, "body-copy")}>
          {description}
        </p>
      </div>

      <div className={styles.cardFooter}>
        <span className={classNames(styles.cta, "sub-headline")}>
          Explore Solutions →
        </span>
      </div>
    </Link>
  );
};

export default AgencyCard;
