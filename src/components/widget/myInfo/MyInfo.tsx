"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { box, sildeImage, slideItem } from "./myInfo.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

function MyInfo() {
  return (
    <div className={box}>
      <Swiper
        effect={"fade"}
        modules={[EffectFade, Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className={slideItem}>
            <div>
              <Image
                src={"/me.jpeg"}
                alt="내모습"
                width={50}
                height={50}
                className={sildeImage}
              ></Image>
            </div>
            <span>Son seongyeol</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={slideItem}>
            <span className={sildeImage}>🎂</span>
            <span>1997. 04. 08.</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={slideItem}>
            <span className={`${sildeImage} font`}>ENFP</span>
            <span>mbti</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MyInfo;
