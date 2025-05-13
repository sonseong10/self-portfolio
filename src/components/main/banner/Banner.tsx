"use client";
import Link from "next/link";
import {
  areaBanner,
  box,
  githubLink,
  altText,
  innerBottom,
  innerTop,
  pointText,
  video,
  visualTitle,
  moveToNext,
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
          >
            <span className={altText}>sonseong10 github로 이동</span>
          </Link>
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
          <span className={moveToNext}>자세히 알아보기</span>
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
