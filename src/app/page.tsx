import Title from "@/components/ui/title/Title";
import LastCommit from "@/components/widget/github/LastCommit";
import MyInfo from "@/components/widget/myInfo/MyInfo";
import {
  areaBanner,
  areaContent,
  areaWidget,
  container,
} from "@/styles/main.css";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/components/banner/Banner"), {
  ssr: !true,
});

export default function Home() {
  return (
    <section>
      <h2 className="screen_out">메인 본문</h2>
      <div className={container}>
        <div className={areaBanner}>
          <Banner />

          <div className={areaWidget}>
            <LastCommit />

            <MyInfo />
          </div>
        </div>
      </div>

      <div>
        <div className={container}>
          <div className={areaContent}>
            <Title text="📷 내가 경험했던 성장과정" />
          </div>
        </div>
        <ul>
          <li>
            <a href="">
              <span>직무경험</span>
              <strong>첫회사 스타트업에서</strong>

              <span>#스타트업</span>
              <span>#직무경험</span>
              <span>1년 11개월</span>
            </a>
          </li>
        </ul>
      </div>

      <div className={container}>
        <div className={areaContent}>
          <Title text="더 나은 개발을 위한 사이드 프로젝트" />
        </div>
      </div>
    </section>
  );
}
