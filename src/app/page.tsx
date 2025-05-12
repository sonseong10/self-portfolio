import CardList from "@/components/cardList/CardList";
import SideProject from "@/components/sideProject/SideProject";
import Title from "@/components/ui/title/Title";
import LastCommit from "@/components/widget/github/LastCommit";
import Intro from "@/components/widget/intro/Intro";
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
    </section>
  );
}
