// Do not import this file directly. Use the classes from the app/styles/typography.scss file instead.

import React from "react";
import classNames from "classnames";

export type TypographyVariant =
  | "title"
  | "subtitle"
  | "heading"
  | "sub-heading"
  | "sub-headline"
  | "body-copy"
  | "footnotes";

export interface TypographyProps {
  variant: TypographyVariant;
  children?: React.ReactNode;
  className?: string;
  highlight?: boolean;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = "",
  highlight = false,
  dangerouslySetInnerHTML,
}) => {
  const classes = classNames(variant, highlight && "highlight", className);

  const getTag = () => {
    switch (variant) {
      case "title":
        return "h1";
      case "subtitle":
        return "h2";
      case "heading":
        return "h3";
      case "sub-heading":
        return "h4";
      case "sub-headline":
        return "h5";
      case "body-copy":
        return "p";
      case "footnotes":
        return "small";
      default:
        return "p";
    }
  };

  const Tag = getTag();

  if (dangerouslySetInnerHTML) {
    return React.createElement(Tag, {
      className: classes,
      dangerouslySetInnerHTML,
    });
  }

  return React.createElement(Tag, { className: classes }, children);
};

export default Typography;
