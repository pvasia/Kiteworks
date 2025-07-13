"use client";

import React, { useState } from "react";
import styles from "./SectionFormCenter.module.scss";
import classNames from "classnames";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

const SectionFormCenter = ({
  title,
  subtitle,
}: {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
}) => {
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ fullname, company, businessEmail });
  };

  return (
    <section className={styles.sectionFormCenter}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.content}>
          <h2 className={classNames(styles.title, "title")}>
            {typeof title === "string" ? (
              <span dangerouslySetInnerHTML={{ __html: title }} />
            ) : (
              title
            )}
          </h2>
          <h3 className={classNames(styles.subtitle, "subtitle")}>
            {typeof subtitle === "string" ? (
              <span dangerouslySetInnerHTML={{ __html: subtitle }} />
            ) : (
              subtitle
            )}
          </h3>

          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <Input
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              inputClassName={styles.input}
              required
            />
            <Input
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              inputClassName={styles.input}
              required
            />
            <Input
              placeholder="Business Email"
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
              inputClassName={styles.input}
              required
            />

            <Button type="submit" className={styles.button} variant="tertiary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionFormCenter;
