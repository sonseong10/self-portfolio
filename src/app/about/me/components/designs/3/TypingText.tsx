"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import { innerBox } from "../../../aboutMe.css";
import { cursor, text } from "./typing.css";

const texts = ["안녕하세요", "HELLO", "こんにちは"];
const TYPING_SPEED = 200;
const DELAY_AFTER_COMPLETE = 2000;

function TypingText() {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const charIndex = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const type = useCallback(() => {
    const currentText = texts[currentTextIndex];

    if (charIndex.current <= currentText.length) {
      setTypedText(currentText.slice(0, charIndex.current));
      charIndex.current += 1;
      timeoutRef.current = setTimeout(type, TYPING_SPEED);
    } else {
      timeoutRef.current = setTimeout(() => {
        charIndex.current = 0;
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, DELAY_AFTER_COMPLETE);
    }
  }, [currentTextIndex]);
  useEffect(() => {
    type();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [type]);

  return (
    <div className={innerBox}>
      <span className={text}>
        {typedText}
        <span className={cursor} aria-hidden>
          |
        </span>
      </span>
    </div>
  );
}

export default memo(TypingText);
