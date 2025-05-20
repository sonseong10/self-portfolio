import { linkBadge, notFoundContainer } from "@/styles/main.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={notFoundContainer}>
      <div>
        <div>
          <Link href={"/about/me"} className={linkBadge}>
            #소개
          </Link>
          <Link href={"/details/1"} className={linkBadge}>
            #직무경험
          </Link>
          <Link href={"/details/2"} className={linkBadge}>
            #최신근황
          </Link>
        </div>
        <h2 style={{ fontSize: "48px" }}>페이지를 찾을 수 없습니다.</h2>
        <p style={{ marginTop: "16px", fontSize: "18px" }}>
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있어요.
        </p>
        <Link href={"/"} className={`${linkBadge} home`}>
          홈으로 이동
        </Link>
      </div>
    </div>
  );
}
