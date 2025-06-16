"use client";

import Link from "next/link";
import { header, wrapper, logo } from "./header.css";
import ThemeButton from "./ThemeButton";
import { useEffect, useState } from "react";

const useScrollHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};

/**
 * 레이아웃 헤더
 */
function Header() {
  const isScrolled = useScrollHeader();
  return (
    <header className={`${header} ${isScrolled ? "scroll" : ""}`}>
      <div className={wrapper}>
        <Link href={"/"} className={logo}>
          <h1 className="screen_out">Sonseonggeol</h1>
        </Link>

        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
