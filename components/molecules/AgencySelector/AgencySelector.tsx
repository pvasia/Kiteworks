import React from "react";
import styles from "./AgencySelector.module.scss";
import classNames from "classnames";
import AgencyCard, { AgencyCardProps } from "@atoms/AgencyCard/AgencyCard";

interface AgencySelectorProps {
  title?: string;
  subtitle?: string;
  items: AgencyCardProps[];
}

const AgencySelector: React.FC<AgencySelectorProps> = ({
  title,
  subtitle,
  items,
}) => {
  console.log("items", items);
  return (
    <section className={classNames(styles.agencySelector)}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={classNames(styles.title, "title")}>{title}</h2>
          <p className={classNames(styles.subtitle, "sub-heading")}>
            {subtitle}
          </p>
        </div>

        <div className={styles.agencyGrid}>
          {items.map((item) => (
            <AgencyCard
              key={item.name}
              name={item.name}
              description={item.description}
              url={item.url}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencySelector;
