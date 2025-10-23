"use client";

// import { codeBox } from "@/app/details/1/work.css";
import { useThemeStore } from "@/store/themeStore";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeHighlightExample({ code }: { code: string }) {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      // className={codeBox}
      style={{
        overflowX: "auto",
        borderRadius: "0.5rem",
        boxSizing: "border-box",
      }}
    >
      <SyntaxHighlighter
        language="tsx"
        style={theme === "dark" ? oneDark : oneLight}
        showLineNumbers
        wrapLongLines={true}
        customStyle={{
          margin: 0,
          padding: "1rem",
          minWidth: "100%",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
