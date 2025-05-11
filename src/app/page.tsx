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

        <div className={areaContent}>
          <h2>성장과정</h2>
        </div>
      </div>
    </section>
  );
}
