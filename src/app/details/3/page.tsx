"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  contents,
  gradientTitle,
  layout,
  linkGroup,
  navigationLink,
  outLink,
} from "../1/work.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={contents}
    >
      {children}
    </motion.div>
  );
}

export function GradientTitle() {
  return (
    <motion.strong
      className={gradientTitle}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      FRONTEND
    </motion.strong>
  );
}

function Tech() {
  return (
    <>
      <div className={layout}>
        <header>
          <h2 className="screen_out">Skills</h2>
        </header>
        <Section>
          <article>
            <GradientTitle />

            <ol>
              <li>
                <h3>TypeScript</h3>
                <p>
                  <Link
                    href="https://sonseong10.github.io/nalC"
                    target="_blank"
                    className={outLink}
                  >
                    nalC 프로젝트
                  </Link>
                  에서 기상청 API의 응답 구조를 기반으로{" "}
                  <strong>Value Object(VO)</strong>를 정의하고,
                  <strong>타입 기반의 개발</strong>을 통해 안전성과 유지보수성을
                  확보했습니다.
                </p>
                <p>
                  초기에는 표현 계층과 도메인 계층의 구분 없이 DTO를 직접
                  사용하는 구조로 인해 중복 선언과 결합도가 높았고, 이로 인해
                  재사용성과 확장성에 한계가 있었습니다. 이를 개선하기 위해{" "}
                  <strong>유니온 타입, 제네릭</strong>을 활용하여 계층 간 책임을
                  분리하고,
                  <strong>타입 전환 유틸</strong>을 도입해 구조를 단순화
                  하고있습니다.
                </p>
              </li>

              <li>
                <h3>React 19</h3>
                <p>
                  어드민 특성상 <strong>SEO보다는 사용자 인터랙션 중심</strong>
                  의 기능이 요구되는
                  <Link
                    href="https://whomember-7d831.web.app/"
                    target="_blank"
                    className={outLink}
                  >
                    내일의집 어드민 프로젝트
                  </Link>
                  를 개발하며 React 19의 신기능을 확인해보니,
                </p>
                <p>
                  <code>useOptimistic()</code>, <code>useActionState()</code>를
                  활용하여 주문 승인 및 배송 처리에서 <strong>낙관적 UI</strong>
                  와<strong>비동기 상태 전이</strong>를 동시에 처리할 예정이고
                  이를 통해 사용자에게 빠른 화면을 전달 할 수 있다고 생각합니다.
                </p>
              </li>

              <li>
                <h3>Next.js 14</h3>
                <p>
                  본 포트폴리오 사이트는 <strong>Next.js App Router</strong>와
                  <strong>Metadata API</strong>를 활용하여 구조적 SEO와 반정형
                  데이터 기반의 구글 상단 노출을 목표로 개발 중입니다.
                </p>
                <p>
                  사용자와 상호작용이 필요한 컴포넌트는 CSR 기반의
                  <code>dynamic</code> 방식으로 분리하고, 그 외 영역은 서버
                  컴포넌트로 구성하여 <strong>렌더링 성능을 극대화</strong>하고
                  있습니다.
                </p>
              </li>

              <li>
                <h3>상태 관리 전략</h3>
                <ul>
                  <li>
                    <h4>Redux Toolkit</h4>
                    <p>
                      직무경험을 통한 회원 정보, 상품 주문 및 배송 등 복잡한
                      상태가 필요한 기능에는
                      <strong>Flux 패턴 기반의 Redux Toolkit</strong>을 적용하여
                      순수한 상태를 유지하도록 작업했으며
                      <strong>createAsyncThunk, createSlice</strong>를 활용해
                      비즈니스 로직을 정형화하고,
                      <strong>코드 가독성과 상태 유지</strong>를 확보했습니다.
                    </p>
                  </li>
                  <li>
                    <h4>Zustand</h4>
                    <p>
                      다크모드 전환, 언어 변경 등 단순하고 즉각적인 상태 관리는
                      <strong>Zustand</strong>로 처리했습니다.
                      <strong>SSR 지원이 뛰어나고 커스텀 훅 중심 구조</strong>라
                      작은 기능에는 빠르게 적용 가능합니다. 상태 로직과 뷰
                      로직이 분리되면서 유지보수가 쉬워졌습니다.
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                <h3>스타일링</h3>
                <ul>
                  <li>
                    <h4>Vanilla Extract CSS</h4>
                    <p>
                      CSS-in-TypeScript 방식의
                      <strong>정적 추출 및 타입 안전성</strong> 덕분에 런타임
                      오버헤드 없이 빠르게 스타일을 적용할 수 있었습니다. reset,
                      normalize 등 글로벌 스타일은 <code>globalStyle</code>을
                      통해 해당 포트폴리오 프로젝트에서 사용했습니다.
                    </p>
                  </li>
                  <li>
                    <h4>Styled-components</h4>
                    <p>
                      이전 직장에서 주력으로 사용한 스타일 라이브러리로 전반적인
                      웹페이지UI 등 <strong>동적 스타일</strong>이 필요한
                      영역에서는 styled-components를 통해 props 기반 스타일로
                      적용했습니다. 불필요한 DOM 생성을 방지하기 위해
                      <strong>구조적 제한 가이드</strong>도 함께 정의했습니다.
                    </p>
                  </li>
                  <li>
                    <h4>SCSS</h4>
                    <p>
                      CSS를 편하게 관리하기 위한 반복적인 스타일을 mixin으로
                      추상화하고,
                      <strong>중첩 규칙과 변수 기반 구조화</strong>를 통해
                      유지보수를 용이하게 했습니다.
                      <strong>BEM 방법론</strong>을 적용해 클래스 네이밍 충돌을
                      방지했습니다.
                    </p>
                  </li>
                </ul>
              </li>
            </ol>
          </article>
        </Section>
      </div>
      <footer>
        <div className={linkGroup}>
          <Link href={"/details/2"} className={navigationLink}>
            이전글
          </Link>
          <Link href={"/details/4"} className={navigationLink}>
            다음글
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Tech;
