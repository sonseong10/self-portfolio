import Link from "next/link";
import { btnGroup, icon, list, listItem } from "./sideProject.css";
import Image from "next/image";

function SideProject() {
  return (
    <>
      <ul className={list}>
        <li className={listItem}>
          <span>일상편의</span>

          <div>
            <Link href={""} className={icon}>
              <Image
                src={"/images/sideproject/nalC.svg"}
                alt={"날씨"}
                width={56}
                height={56}
                priority
              />
            </Link>
          </div>
        </li>

        <li className={listItem}>
          <span>엔터테인먼트</span>
          <div>
            <Link href={""} className={icon}>
              <Image
                src={"/images/sideproject/poketball.png"}
                alt={"날씨"}
                width={56}
                height={56}
                priority
              />
            </Link>
          </div>
        </li>

        <li className={listItem}>
          <span>쇼핑</span>
          <div>
            <Link href={""} className={icon}>
              <Image
                src={"/images/sideproject/tomarrowhouse.svg"}
                alt={"날씨"}
                width={56}
                height={56}
                priority
              />
            </Link>
          </div>
        </li>

        <li className={listItem}>
          <span>라이브러리</span>
          <div>
            <Link href={""} className={icon}>
              <Image
                src={"/images/sideproject/ducksay.jpeg"}
                alt={"날씨"}
                width={56}
                height={56}
                priority
              />
            </Link>
          </div>
        </li>
      </ul>

      <div className={btnGroup}>
        <Link href={""}>{"프로젝트 모두보기 >"}</Link>
      </div>
    </>
  );
}

export default SideProject;
