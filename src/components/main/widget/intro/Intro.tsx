import Link from "next/link";
import { widgetBox } from "./infro.css";

function Intro() {
  return (
    <Link href={"/about/me"} className={widgetBox}>
      <span>
        어떤개발자로
        <br /> 성장하고 있나요
      </span>
    </Link>
  );
}

export default Intro;
