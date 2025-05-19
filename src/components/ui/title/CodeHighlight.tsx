"use client";

import { useThemeStore } from "@/store/themeStore";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeHighlightExample({ code }: { code: string }) {
  const theme = useThemeStore((state) => state.theme);
  return (
    <SyntaxHighlighter
      language="tsx"
      style={theme === "dark" ? oneDark : oneLight}
      showLineNumbers
    >
      {code}
    </SyntaxHighlighter>
  );
}
