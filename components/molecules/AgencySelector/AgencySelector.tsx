import React from "react";
import Link from "next/link";
import styles from "./AgencySelector.module.scss";
import classNames from "classnames";
import {
  ShieldCheckIcon,
  HomeIcon,
  ScaleIcon,
  EyeIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

interface Agency {
  id: string;
  name: string;
  shortName: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

interface AgencySelectorProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const AgencySelector: React.FC<AgencySelectorProps> = ({
  title = "Find Solutions for Your Agency",
  subtitle = "Select your federal agency to discover tailored security solutions and compliance frameworks designed specifically for your organization's needs.",
  className,
}) => {
  const agencies: Agency[] = [
    {
      id: "dod",
      name: "Department of Defense",
      shortName: "DoD",
      description:
        "Advanced cybersecurity solutions for defense operations and classified information handling.",
      url: "/solutions/defense",
      icon: <ShieldCheckIcon />,
      color: "defense",
    },
    {
      id: "dhs",
      name: "Department of Homeland Security",
      shortName: "DHS",
      description:
        "Secure communication and data sharing for homeland security initiatives and border protection.",
      url: "/solutions/dhs",
      icon: <HomeIcon />,
      color: "homeland",
    },
    {
      id: "doj",
      name: "Department of Justice",
      shortName: "DOJ",
      description:
        "Compliant file sharing and case management for law enforcement and legal proceedings.",
      url: "/solutions/justice",
      icon: <ScaleIcon />,
      color: "justice",
    },
    {
      id: "ic",
      name: "Intelligence Community",
      shortName: "IC",
      description:
        "High-security collaboration tools for intelligence gathering and analysis operations.",
      url: "/solutions/intelligence",
      icon: <EyeIcon />,
      color: "intelligence",
    },
    {
      id: "hhs",
      name: "Health and Human Services",
      shortName: "HHS",
      description:
        "HIPAA-compliant platforms for healthcare data management and public health coordination.",
      url: "/solutions/hhs",
      icon: <HeartIcon />,
      color: "health",
    },
  ];

  return (
    <section className={classNames(styles.agencySelector, className)}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={classNames(styles.title, "title")}>{title}</h2>
          <p className={classNames(styles.subtitle, "sub-heading")}>
            {subtitle}
          </p>
        </div>

        <div className={styles.agencyGrid}>
          {agencies.map((agency) => (
            <Link
              key={agency.id}
              href={agency.url}
              className={classNames(
                styles.agencyCard,
                styles[`agencyCard--${agency.color}`]
              )}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{agency.icon}</div>
                <div className={styles.agencyInfo}>
                  <h3 className={classNames(styles.agencyName, "heading")}>
                    {agency.name}
                  </h3>
                </div>
              </div>

              <div className={styles.cardBody}>
                <p className={classNames(styles.description, "body-copy")}>
                  {agency.description}
                </p>
              </div>

              <div className={styles.cardFooter}>
                <span className={classNames(styles.cta, "sub-headline")}>
                  Explore Solutions →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencySelector;
