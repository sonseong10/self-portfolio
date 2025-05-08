"use client";
import Link from "next/link";
import {
  areaBanner,
  box,
  githubLink,
  innerBottom,
  innerTop,
  pointText,
  video,
  visualTitle,
} from "./banner.css";

function Banner() {
  return (
    <div className={areaBanner}>
      <div className={box}>
        <div className={innerTop}>
          <Link
            href={"https://github.com/sonseong10"}
            target="_blank"
            className={githubLink}
          />
        </div>
        <video
          className={video}
          src="/aivideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={innerBottom}>
          <span>자세히 알아보기</span>
        </div>
        <strong className={visualTitle}>
          안녕하세요,
          <br /> Frontend <span className={pointText}>Developer</span>
          <br /> <span className={pointText}>손성열</span>입니다.
        </strong>
      </div>
    </div>
  );
}

export default Banner;
