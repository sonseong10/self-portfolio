"use client";

import { useCallback } from "react";
import confetti from "canvas-confetti";
import { button } from "./style.css";
import { innerBox } from "../../../aboutMe.css";

export default function ConfettiButton() {
  const fire = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className={innerBox}>
      <button onClick={fire} className={button}>
        <span aria-hidden>🎉 Click me</span>
        <span className="screen_out">축하하기</span>
      </button>
    </div>
  );
}
