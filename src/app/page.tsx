import { areaBanner, areaWidget, container } from "@/styles/main.css";
import dynamic from "next/dynamic";
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
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
