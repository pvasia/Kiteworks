import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import React from "react";
import styles from "./Form.module.scss";
import classNames from "classnames";

const Form = ({
  direction = "column",
  onSubmit,
  className,
  firstName,
  lastName,
  company,
  businessEmail,
}: {
  direction?: "column" | "row";
  onSubmit: () => void;
  className?: string;
  firstName: string;
  lastName: string;
  company: string;
  businessEmail: string;
}) => {
  return (
    <div className={classNames(styles.formContainer, className)}>
      <form className={classNames(styles.form, styles[direction])}>
        <Input placeholder="Firstname*" value={firstName} required />
        <Input placeholder="Lastname*" value={lastName} required />
        <Input placeholder="Company*" value={company} required />
        <Input placeholder="Business Email*" value={businessEmail} required />
      </form>
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};

export default Form;
