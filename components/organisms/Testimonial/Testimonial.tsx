import React from "react";
import styles from "./Testimonial.module.scss";
import classNames from "classnames";
import Image from "next/image";

interface TestimonialProps {
  variant: "primary" | "secondary";
  title: string;
  quote: string;
  author: string;
  authorTitle: string;
  authorCompany: string;
  logo?: string;
}

const Testimonial = ({
  variant,
  title,
  quote,
  author,
  authorTitle,
  authorCompany,
  logo,
}: TestimonialProps) => {
  const patternHandler = () => {
    if (variant === "primary") {
      return "/images/pattern-testimonial-1.png";
    }
    return "/images/pattern-testimonial-2.png";
  };
  return (
    <div className={classNames(styles.testimonial, styles[variant])}>
      <div className={styles.patternContainer}>
        <Image
          src={patternHandler()}
          alt="pattern"
          className={styles.pattern}
          fill
        />
      </div>
      <div className="container">
        <div className={styles.testimonialContent}>
          <h3 className={classNames(styles.heading, "heading")}>{title}</h3>
          <div className={styles.inner}>
            {logo && (
              <div className={styles.logoContainer}>
                <Image src={logo} alt="logo" className={styles.logo} fill />
              </div>
            )}
            <div className={styles.innerText}>
              {quote && <p className={styles.quote}>“{quote}”</p>}
              <div className={styles.authorContainer}>
                -
                <div className={styles.author}>
                  {author},&nbsp;{authorTitle},&nbsp;{authorCompany}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
