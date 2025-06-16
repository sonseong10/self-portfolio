import CardList from "@/components/main/cardList/CardList";
import SideProject from "@/components/main/sideProject/SideProject";
import Title from "@/components/ui/title/Title";
import LastCommit from "@/components/main/widget/github/LastCommit";
import Intro from "@/components/main/widget/intro/Intro";
import MyInfo from "@/components/main/widget/myInfo/MyInfo";
import {
  areaBanner,
  areaContent,
  areaWidget,
  container,
} from "@/styles/main.css";
import dynamic from "next/dynamic";
import Education from "@/components/main/education/education";

const Banner = dynamic(() => import("@/components/main/banner/Banner"), {
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
            <Intro />

            <LastCommit />

            <MyInfo />
          </div>
        </div>
      </div>

      <div style={{ width: "100%", overflowX: "hidden" }}>
        <div className={container}>
          <div className={areaContent}>
            <Title text="📷 내가 경험했던 성장과정" />
          </div>
        </div>
        <CardList />
      </div>

      <div className={container}>
        <div className={areaContent}>
          <Title text="🖥 더 나은 개발을 위한 사이드 프로젝트" />

          <SideProject />
        </div>
      </div>

      <div className={container}>
        <div className={areaContent}>
          <Title text="📚 교육과 기타 활동" />

          <Education />
        </div>
      </div>
    </section>
  );
}
