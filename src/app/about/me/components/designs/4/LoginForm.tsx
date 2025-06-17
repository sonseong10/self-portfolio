"use client";

import { useState } from "react";
import LoginMascot from "./LoginMascot";
import { innerBox } from "../../../aboutMe.css";
import { form, input, wrapper } from "./form.css";

export default function LoginPage() {
  const [focusedInput, setFocusedInput] = useState<"email" | "password" | null>(
    null
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={innerBox}>
      <div className={wrapper}>
        <LoginMascot focus={focusedInput} emailLength={email.length} />

        <form action={void 0} className={form}>
          <input
            type="email"
            placeholder="test@test.com"
            value={email}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
            onChange={(e) => setEmail(e.target.value)}
            className={input}
            required
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
            onChange={(e) => setPassword(e.target.value)}
            className={input}
            required
          />
        </form>
      </div>
    </div>
  );
}
