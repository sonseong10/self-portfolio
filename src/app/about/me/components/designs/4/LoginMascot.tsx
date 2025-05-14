"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { handLeft, handRight, innerAnimal, mascotEyes } from "./form.css";

function LoginMascot({
  focus,
  emailLength,
}: {
  focus: "email" | "password" | null;
  emailLength: number;
}) {
  const [isCoveringEyes, setIsCoveringEyes] = useState(false);
  const eyeX = focus === "email" ? Math.min(emailLength - 4, 10) : 0;
  useEffect(() => {
    setIsCoveringEyes(focus === "password");
  }, [focus]);

  return (
    <div className={innerAnimal}>
      {/* 고양이 이미지 */}
      <Image
        src="/images/animals/face.png"
        alt="Mascot"
        className="absolute w-full"
        width={100}
        height={100}
        priority
      />

      {/* 눈 */}
      <motion.img
        src="/images/animals/eyes.png"
        alt="Eyes"
        className={mascotEyes}
        style={{
          top: `${focus === "email" ? "62px" : "60px"}`,
        }}
        animate={{ x: eyeX }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      {/* 손 */}
      {isCoveringEyes && (
        <>
          <motion.img
            src="/images/animals/handle_left.png"
            alt="Left paw"
            className={handLeft}
            initial={{ x: -1, y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", damping: 10 }}
          />
          <motion.img
            src="/images/animals/handle_right.png"
            alt="Right paw"
            className={handRight}
            initial={{ x: -1, y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", damping: 10 }}
          />
        </>
      )}
    </div>
  );
}

export default memo(LoginMascot);
