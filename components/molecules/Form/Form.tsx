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
  onChangeFirstName,
  onChangeLastName,
  onChangeCompany,
  onChangeBusinessEmail,
}: {
  direction?: "column" | "row";
  onSubmit: () => void;
  className?: string;
  firstName: string;
  lastName: string;
  company: string;
  businessEmail: string;
  onChangeFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCompany: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeBusinessEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={classNames(styles.formContainer, className)}>
      <form className={classNames(styles.form, styles[direction])}>
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
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};

export default Form;
