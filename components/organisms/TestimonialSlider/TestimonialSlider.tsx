"use client";

import React, { useRef, useEffect, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { SwiperRef } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import styles from "./TestimonialSlider.module.scss";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";

interface TestimonialData {
  title: string;
  quote: string;
  author: string;
  authorTitle: string;
  authorCompany: string;
  logo?: string;
}

interface TestimonialSliderProps {
  testimonials: TestimonialData[];
  autoplay?: boolean;
  autoplayDelay?: number;
  variant: "primary" | "secondary";
}

const TestimonialSlider = ({
  testimonials,
  autoplay = true,
  autoplayDelay = 3000,
  variant,
}: TestimonialSliderProps) => {
  const swiperRef = useRef<SwiperRef>(null);
  const uniqueId = useId();

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.updateSize();
        swiperRef.current.swiper.updateSlides();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const patternHandler = () => {
    if (variant === "primary") {
      return "/images/pattern-testimonial-1.png";
    }
    return "/images/pattern-testimonial-2.png";
  };

  // Generate unique selectors for this slider instance
  const navigationNextSelector = `#${uniqueId} .${styles.swiperButtonNext}`;
  const navigationPrevSelector = `#${uniqueId} .${styles.swiperButtonPrev}`;
  const paginationSelector = `#${uniqueId} .${styles.swiperPagination}`;

  return (
    <div
      id={uniqueId}
      className={classNames(styles.testimonialSlider, styles[variant])}
    >
      <div className={styles.patternContainer}>
        <Image
          src={patternHandler()}
          alt="pattern"
          className={styles.pattern}
          fill
        />
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        simulateTouch={false}
        navigation={{
          nextEl: navigationNextSelector,
          prevEl: navigationPrevSelector,
        }}
        pagination={{
          clickable: true,
          el: paginationSelector,
          bulletClass: styles.swiperBullet,
          bulletActiveClass: styles.swiperBulletActive,
        }}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        loop={testimonials.length > 1}
        className={classNames(styles.swiperContainer, `swiper-${uniqueId}`)}
      >
        {testimonials.map((testimonial, index) => {
          return (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div
                className={classNames(styles.testimonialContent, "container")}
              >
                <h3 className={classNames(styles.heading, "heading")}>
                  {testimonial.title}
                </h3>
                <div className={styles.inner}>
                  {testimonial.logo && (
                    <div className={styles.logoContainer}>
                      <Image
                        src={testimonial.logo}
                        alt="logo"
                        className={styles.logo}
                        fill
                      />
                    </div>
                  )}
                  <div className={styles.innerText}>
                    {testimonial.quote && (
                      <p className={styles.quote}>
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    )}
                    <div className={styles.authorContainer}>
                      -
                      <div className={styles.author}>
                        {testimonial.author},&nbsp;{testimonial.authorTitle}
                        ,&nbsp;{testimonial.authorCompany}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {testimonials.length > 1 && (
        <>
          <div
            className={`${styles.swiperButtonPrev} ${styles.swiperNavButton}`}
          >
            <ChevronLeftIcon className={styles.swiperNavButtonIcon} />
          </div>
          <div
            className={`${styles.swiperButtonNext} ${styles.swiperNavButton}`}
          >
            <ChevronRightIcon className={styles.swiperNavButtonIcon} />
          </div>
        </>
      )}

      {/* Custom Pagination */}
      {testimonials.length > 1 && (
        <div className={styles.swiperPagination}></div>
      )}
    </div>
  );
};

export default TestimonialSlider;
