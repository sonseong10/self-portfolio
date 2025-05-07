import Link from "next/link";
import { header, wrapper, logo } from "./header.css";
import ThemeButton from "./ThemeButton";

function Header() {
  return (
    <header className={header}>
      <div className={wrapper}>
        <Link href={"/about"} className={logo}>
          <h1 className="screen_out">Sonseonggeol</h1>
        </Link>

        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
