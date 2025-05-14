import { motion } from "framer-motion";
import { innerBox } from "../../../aboutMe.css";
import { themeColor } from "@/styles/tokens.css";

function LineSVG() {
  const pathD = `
    M75,100 
    C75,50  150,50 150,100 
    C150,150  225,150 225,100 
    C225,50  150,50 150,100 
    C150,150  75,150 75,100 Z
  `;

  return (
    <div className={innerBox}>
      <svg width="300" height="200" viewBox="0 0 300 200">
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 0 L 20 0 L 20 20 L 0 20 Z"
              fill="none"
              stroke={themeColor.border}
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />

        <path
          d={pathD}
          stroke="#ddd"
          strokeWidth="12"
          strokeLinecap="round"
          fill="transparent"
        />

        <motion.path
          d={pathD}
          stroke="#0066ff"
          strokeWidth="12"
          strokeLinecap="round"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </svg>
    </div>
  );
}

export default LineSVG;
