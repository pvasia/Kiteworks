import React from "react";
import styles from "./SectionFormCenter.module.scss";
import classNames from "classnames";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

const SectionFormCenter = ({
  title,
  subtitle,
  fullname,
  company,
  businessEmail,
  onSubmit,
  onChangeFullname,
  onChangeCompany,
  onChangeBusinessEmail,
}: {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  fullname: string;
  company: string;
  businessEmail: string;
  onSubmit: () => void;
  onChangeFullname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCompany: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeBusinessEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
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

          <form className={styles.formContainer}>
            <Input
              placeholder="Fullname"
              value={fullname}
              onChange={onChangeFullname}
              inputClassName={styles.input}
            />
            <Input
              placeholder="Company"
              value={company}
              onChange={onChangeCompany}
              inputClassName={styles.input}
            />
            <Input
              placeholder="Business Email"
              value={businessEmail}
              onChange={onChangeBusinessEmail}
              inputClassName={styles.input}
            />

            <Button
              type="submit"
              className={styles.button}
              onClick={onSubmit}
              variant="tertiary"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionFormCenter;
