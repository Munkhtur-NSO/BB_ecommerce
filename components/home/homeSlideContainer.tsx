"use client";

import Link from "next/link";
import React from "react";
import { EffectFade, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const HomeSlider: React.FC = () => {
  return (
    <>
      <Swiper
        className={"swiper frontSlide mb-sm-0 mb-2"}
        modules={[EffectFade, Thumbs, Pagination, Navigation]}
        loop={true}
        autoplay={true}
        pagination={{
          el: ".swiper-pagination-frontSlide",
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-frontSlide",
          prevEl: ".swiper-button-prev-frontSlide",
        }}
      >
        <React.Fragment>
          <SwiperSlide>
            <Link href={"/"} className="d-block">
              <img
                src={"http://localhost:3000/images/cart-page-header-img.jpg"}
                alt="slide"
                className="w-100  img-cover"
                // height={390}
                // width={220}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="d-block">
              <img
                src={"/images/cart-page-header-img.jpg"}
                alt="slide"
                className="w-100  img-cover"
                // height={390}
                // width={220}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="d-block">
              <img
                src={"/images/cart-page-header-img.jpg"}
                alt="slide"
                className="w-100  img-cover"
                // height={390}
                // width={220}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={"/"} className="d-block">
              <img
                src={"/images/cart-page-header-img.jpg"}
                alt="slide"
                className="w-100  img-cover"
                // height={390}
                // width={220}
              />
            </Link>
          </SwiperSlide>
        </React.Fragment>
        <div className="swiper-pagination swiper-pagination-frontSlide" />
        <div className="swiper-button swiper-button-prev swiper-button-prev-frontSlide d-lg-block d-none "></div>
        <div className="swiper-button swiper-button-next swiper-button-next-frontSlide d-lg-block d-none "></div>
      </Swiper>
    </>
  );
};
export default HomeSlider;
