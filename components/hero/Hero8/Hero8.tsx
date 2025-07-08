"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Hero8.module.scss";
import Button from "@/components/atoms/Button";
import classNames from "classnames";

// Full Background Image w/ Title and Subtitle Center w/ One Button
const Hero8 = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  buttonLink,
  height,
  isParallax,
}: {
  imageUrl: string;
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  buttonText: string;
  buttonLink: string;
  height?: string;
  isParallax: boolean;
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldUseParallax = isParallax && !isMobile;

  useEffect(() => {
    if (!shouldUseParallax) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldUseParallax]);

  return (
    <section
      className={styles.hero8}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: shouldUseParallax
          ? `center ${scrollY * 0.2 - (height ? parseInt(height) + 150 : 0)}px`
          : "center center",
        backgroundSize: shouldUseParallax ? "120%" : "cover",
        backgroundRepeat: "no-repeat",
        height: height,
      }}
    >
      <div className="container">
        <div className={classNames(styles.heroContentGrid)}>
          <div className={styles.centerSection}>
            <h1 className="title">
              {typeof title === "string" ? (
                <span dangerouslySetInnerHTML={{ __html: title }} />
              ) : (
                title
              )}
            </h1>
            <p className="subtitle">
              {typeof subtitle === "string" ? (
                <span dangerouslySetInnerHTML={{ __html: subtitle }} />
              ) : (
                subtitle
              )}
            </p>
            <Button className="blue-on-hover" href={buttonLink}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>

      <Image
        src="/images/pattern-transparent-1.png"
        alt="Transparent pattern 1"
        width={240}
        height={240}
        className={classNames(styles.pattern, styles.pattern1)}
      />

      <Image
        src="/images/pattern-transparent-2.png"
        alt="Transparent pattern 2"
        width={300}
        height={260}
        className={classNames(styles.pattern, styles.pattern2)}
      />
    </section>
  );
};

export default Hero8;
