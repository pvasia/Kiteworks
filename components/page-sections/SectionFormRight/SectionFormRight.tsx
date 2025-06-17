import React from "react";
import styles from "./SectionFormRight.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

const SectionFormRight = ({
  title,
  copy,
  subtitle,
  firstName,
  lastName,
  company,
  businessEmail,
  onSubmit,
  onChangeFirstName,
  onChangeLastName,
  onChangeCompany,
  onChangeBusinessEmail,
}: {
  title: string | React.ReactNode;
  copy: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  firstName: string;
  lastName: string;
  company: string;
  businessEmail: string;
  onSubmit: () => void;
  onChangeFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCompany: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeBusinessEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <section className={styles.sectionFormRight}>
      <div className={classNames(styles.container, "container")}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <div className={styles.inner}>
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
              <p className={styles.copy}>
                {typeof copy === "string" ? (
                  <span dangerouslySetInnerHTML={{ __html: copy }} />
                ) : (
                  copy
                )}
              </p>
            </div>
          </div>
          <div className={styles.rightSection}>
            <form className={classNames(styles.form)}>
              <Input
                type="text"
                placeholder="Firstname*"
                value={firstName}
                required
                onChange={onChangeFirstName}
              />
              <Input
                type="text"
                placeholder="Lastname*"
                value={lastName}
                required
                onChange={onChangeLastName}
              />
              <Input
                type="text"
                placeholder="Company*"
                value={company}
                required
                onChange={onChangeCompany}
              />
              <Input
                type="email"
                placeholder="Business Email*"
                value={businessEmail}
                required
                onChange={onChangeBusinessEmail}
              />
            </form>
            <Button onClick={onSubmit} variant="primary">
              Submit
            </Button>
            <div className={classNames(styles.pattern, styles.pattern2)}>
              <Image src="/images/form-pattern-2.png" alt="Pattern2" fill />
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames(styles.rectangleWhite1, styles.rectangleWhite)}
      ></div>
      <div
        className={classNames(styles.rectangleWhite2, styles.rectangleWhite)}
      ></div>
      <div
        className={classNames(styles.rectangleWhite3, styles.rectangleWhite)}
      ></div>

      <div
        className={classNames(styles.rectangleOrange1, styles.rectangleOrange)}
      ></div>
      <div
        className={classNames(styles.rectangleOrange2, styles.rectangleOrange)}
      ></div>
      <div
        className={classNames(styles.rectangleOrange3, styles.rectangleOrange)}
      ></div>

      <div className={classNames(styles.pattern, styles.pattern1)}>
        <Image src="/images/form-pattern-1.png" alt="Pattern1" fill />
      </div>
    </section>
  );
};

export default SectionFormRight;
