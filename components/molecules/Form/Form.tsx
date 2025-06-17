import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import React from "react";
import styles from "./Form.module.scss";
import classNames from "classnames";

const Form = ({ direction = "column" }: { direction?: "column" | "row" }) => {
  return (
    <form className={classNames(styles.form, styles[direction])}>
      <Input placeholder="Firstname*" required />
      <Input placeholder="Lastname*" required />
      <Button>Submit</Button>
    </form>
  );
};

export default Form;
