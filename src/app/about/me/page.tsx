"use client";

import { useEffect, useRef, useState } from "react";
import { dropDownBtn, list, listItem } from "./dropdownList.css";

const sections = [
  {
    title: "기술 선택과 책임",
    content:
      "서비스 규모에 알맞은 기술선택 능력으로 오버스펙을 지양하며 npmtrends 등을 활용합니다.",
  },
  {
    title: "문서화 및 기록",
    content:
      "주어진 업무에 대하여 비슷한 업무대응을 위한 문서화를 합니다. 최근 Github Issue를 활용하여 기록을 남기고 있습니다.",
  },
  {
    title: "비효율 업무를 개선",
    content:
      "어드민 중심으로 불필요함을 구분해서 유관부서의 고충을 개선 및 반복업무를 줄입니다.",
  },
  {
    title: "SEO와 DOM 이해",
    content:
      "SSR 기반에서는 SEO를 고려한 DOM트리 구조로 작성하는 시멘틱 마크업을 좋아합니다.",
  },
];

export default function DropdownScroll() {
  const [active, setActive] = useState(1); // index 1이 첫 li
  const scrollLock = useRef(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const touchStartY = useRef<number | null>(null);

  const handleScroll = (direction: "up" | "down") => {
    setActive((prev) => {
      const next =
        direction === "down"
          ? Math.min(prev + 1, sectionRefs.current.length - 1)
          : prev - 1 === 0
          ? 1
          : Math.max(prev - 1, 0);

      const nextEl = sectionRefs.current[next];
      if (nextEl) {
        nextEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      return next;
    });
  };

  useEffect(() => {
    const lockScroll = () => {
      scrollLock.current = true;
      setTimeout(() => {
        scrollLock.current = false;
      }, 800);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (scrollLock.current) return;
      lockScroll();

      if (e.deltaY > 0) handleScroll("down");
      else if (e.deltaY < 0) handleScroll("up");
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null || scrollLock.current) return;

      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 30) return; // 스와이프 감지 최소 거리

      lockScroll();
      if (deltaY > 0) handleScroll("down");
      else handleScroll("up");

      touchStartY.current = null;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <ul className={list}>
          {sections.map((item, idx) => {
            const globalIndex = idx;
            return (
              <li
                key={idx}
                ref={(el) => {
                  sectionRefs.current[globalIndex + 1] = el as HTMLElement;
                }}
                className={`${listItem} ${
                  active === globalIndex + 1 ? "isActive" : ""
                }`}
              >
                <button
                  className={dropDownBtn}
                  onClick={() => {
                    setActive(globalIndex + 1);
                    sectionRefs.current[globalIndex + 1]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  {item.title}
                </button>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        ref={(el) => {
          sectionRefs.current[sections.length + 1] = el;
        }}
        style={{ height: "100vh" }}
      ></div>

      <div
        ref={(el) => {
          sectionRefs.current[sections.length + 2] = el;
        }}
        style={{ height: "100vh" }}
      ></div>
    </>
  );
}
