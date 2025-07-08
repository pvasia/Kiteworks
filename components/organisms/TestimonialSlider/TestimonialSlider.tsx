"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import Testimonial from "../Testimonial";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import styles from "./TestimonialSlider.module.scss";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface TestimonialData {
  variant: "primary" | "secondary";
  title: string;
  quote: string;
  author: string;
  authorTitle: string;
  authorCompany: string;
  logo?: string;
}

interface TestimonialSliderProps {
  testimonials: TestimonialData[];
  autoAdvance?: boolean;
  autoAdvanceInterval?: number;
}

const TestimonialSlider = ({
  testimonials,
  autoAdvance = true,
  autoAdvanceInterval = 5000,
}: TestimonialSliderProps) => {
  const swiperRef = useRef<SwiperRef>(null);

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

  return (
    <div className={styles.testimonialSlider}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        pagination={{
          clickable: true,
          el: `.${styles.swiperPagination}`,
          bulletClass: styles.swiperBullet,
          bulletActiveClass: styles.swiperBulletActive,
        }}
        autoplay={
          autoAdvance
            ? {
                delay: autoAdvanceInterval,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        loop={testimonials.length > 1}
        className={styles.swiperContainer}
      >
        {testimonials.map((testimonial, index) => {
          const variant = testimonial.variant || "primary";
          const slideClass = `${styles.swiperSlide} ${
            variant === "primary"
              ? styles.swiperSlidePrimary
              : styles.swiperSlideSecondary
          }`;

          return (
            <SwiperSlide key={index} className={slideClass}>
              <Testimonial
                variant={variant}
                title={testimonial.title}
                quote={testimonial.quote}
                author={testimonial.author}
                authorTitle={testimonial.authorTitle}
                authorCompany={testimonial.authorCompany}
                logo={testimonial.logo}
              />
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
