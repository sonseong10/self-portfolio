import dynamic from "next/dynamic";
import Image from "next/image";
import { contents, layout, linkGroup, navigationLink } from "../1/work.css";
import Link from "next/link";

const CodeHighlightExample = dynamic(
  () => import("@/components/ui/title/CodeHighlight")
);

const multiParadigmCode = `
class Cart {
  private prices: number[];

  constructor(prices: number[]) {
    this.prices = prices;
  }

  public getTotal(taxRate: number): number {
    return this.prices
      .filter((price: number) => price > 0)                          // 선언형
      .map((price: number) => this.applyTax(price, taxRate))        // 함수형
      .reduce((acc: number, price: number) => acc + price, 0);      // 선언형
  }

  private applyTax(price: number, rate: number): number {
    return price * (1 + rate); // 순수 함수
  }
}

// 예제 실행
const cart = new Cart([100, 200, 300]);
console.log(cart.getTotal(0.1)); // 출력: 660
`.trim();

function studyPage() {
  return (
    <>
      <div className={layout}>
        <aside>
          <nav></nav>
        </aside>
        <div className={contents}>
          <h2>개발 활동</h2>
          <p>
            다양한 프로그래밍 패러다임을 무의식적으로 사용하고 있었지만, 이를
            <strong>
              의식적으로 학습하고 실제 코드에 적용해보며 차이를 체감
            </strong>
            하고 있습니다.
            <br />
            같은 기능을 구현하더라도{" "}
            <strong>
              방식을 이해하고 쓰는 사람과 그렇지 않은 사람의 코드에는 분명한
              차이
            </strong>
            가 있다고 믿기 때문에 멀티패러다임 사고를 꾸준히 훈련 중입니다.
          </p>
          <p>
            특히 하나의 문제를 <strong>객체지향, 함수형, 선언형</strong>{" "}
            방식으로 각각 구현해보며 각 패러다임의{" "}
            <strong>철학, 장점, 한계</strong>를 비교하고, 실무에 적합하게
            조합하는 연습을 하고 있습니다.
          </p>
          <h3>멀티패러다임 예제 (OOP + FP + Declarative)</h3>
          <CodeHighlightExample code={multiParadigmCode} />
          <p>
            위 코드는 <code>Cart</code>라는 객체지향 클래스 안에서{" "}
            <strong>함수형 스타일</strong>과
            <strong>선언형 메서드 체이닝</strong>을 함께 사용한 전형적인
            멀티패러다임 예시입니다. 다양한 철학이 유기적으로 결합된 구조로,{" "}
            <strong>가독성과 유지보수성</strong>을 동시에 고려했습니다.
          </p>
          <ul>
            <li>
              <strong>선언형 (Declarative)</strong>: <code>filter</code>,{" "}
              <code>map</code>, <code>reduce</code>를 통해 데이터 흐름을
              명확하게 표현합니다.
            </li>
            <li>
              <strong>함수형 (Functional)</strong>: <code>applyTax</code>는
              상태를 바꾸지 않는
              <strong>순수 함수</strong>로 구성되어 있어 예측 가능한 동작을
              만듭니다.
            </li>
            <li>
              <strong>객체지향 (OOP)</strong>: <code>Cart</code> 클래스는
              상태(prices)를 캡슐화하고, 행위는 메서드로 추상화되어 있습니다.
            </li>
          </ul>
          <p>
            클래스 기반으로 큰 구조를 설계하고, 내부 로직은 함수형 스타일로
            작성하면
            <strong>역할 분리가 명확해지고</strong>, 코드의{" "}
            <strong>결합도는 낮아지며 유지보수성이 향상</strong>됩니다. 또한
            순수 함수와 선언형 프로그래밍은 테스트 작성이 쉬워
            <strong>유닛 테스트 기반 개발</strong>에도 유리합니다.
          </p>
          <Image
            src="https://github.com/marpple/multi-paradigm-programming/raw/main/img/book.jpg"
            width={240}
            height={320}
            alt="멀티패러다임 프로그래밍(유인동) 도서"
            priority
          />
          <p>
            현재는 유인동님의 <strong>「멀티패러다임 프로그래밍」</strong>을
            참고하여 학습을 이어가고 있으며, 문제 해결 능력을 높이기 위해 목적에
            맞는 패러다임을 선택하고 활용하려고 노력 중입니다.
          </p>

          <h2>구름톤 DeepDive 풀스택 전형 참여 이유</h2>
          <Image
            src={"/images/goormton.png"}
            alt="구름톤 초대장"
            width={400}
            height={360}
            priority
          />

          <p>
            경력자임에도 국비지원 프로그램에 참여하게 된 이유를 설명드리고자
            합니다. 저는 약 2년(1년 11개월)의 프론트엔드 경력을 가진 상태에서,
            개인적인 사정으로 공백기를 가졌고, 이후 다시 복직을 준비하면서
            현실적인 한계와 기술 트렌드 변화에 직면하게 되었습니다.
          </p>

          <h3>복직 준비 과정에서 느낀 문제</h3>
          <ol>
            <li>3년 이상 경력자 채용 비중 증가 → 애매한 2년차로 분류됨</li>
            <li>
              개인 프로젝트는 많지만 협업 기반 팀 프로젝트 경험은 상대적으로
              부족
            </li>
            <li>공백기 동안 Next.js, React Native, Nuxt 등 비중이 높아짐</li>
          </ol>

          <h3>구름톤을 선택한 이유</h3>
          <ol>
            <li>온라인 기반으로 자율적 학습과 병행 가능</li>
            <li>다양한 연령과 배경을 가진 개발자들과 팀 협업 경험</li>
            <li>취업 컨설팅, 실무 피드백, 네트워킹 기회 제공</li>
            <li>참여에 따른 활동비 및 지원금 제공</li>
          </ol>

          <p>
            이와 같은 이유로 단기적 손실보다 장기적으로 실이 적은, 충분히 가치
            있는 선택이라고 판단했습니다.
          </p>

          <h3>백엔드 기술에 대한 확장 기대</h3>
          <p>
            프론트엔드 실무에는 익숙하지만 백엔드 영역은 아직 코드 해석 위주의
            경험에 머물러 있습니다. 이번 풀스택 과정에서는 실질적인 백엔드 구현
            능력을 쌓고, 전체 아키텍처에 대한 이해도를 넓히는 데 집중할
            예정입니다.
          </p>
          <h3>CTO 역할의 간접 경험</h3>
          <p>
            저는 실무 경험이 있다는 장점을 바탕으로, 랜덤으로 구성된 팀원들
            사이에서 자연스럽게 리더십을 발휘하고 팀장을 맡게 되었습니다. 이를
            통해 프로젝트 초기 기획부터 역할 분배, 기술 스택 선정, 일정 관리까지
            전체적인 개발 흐름을 조율하는 경험을 쌓고 있습니다.
          </p>
          <p>
            이 과정은 단순한 코딩을 넘어, 실제 서비스 개발 시 필요한
            커뮤니케이션 능력과 책임감, 그리고 직무 간 경계에 대한 이해를 함께
            키울 수 있는 소중한 기회라고 생각합니다. 결과적으로, 저는 이번 팀
            프로젝트를 통해 작은 규모의 CTO 역할을 간접적으로나마 경험하고
            있다고 자신 있게 말씀드릴 수 있습니다.
          </p>
        </div>
      </div>
      <footer>
        <div className={linkGroup}>
          <Link href={"/details/1"} className={navigationLink}>
            이전글
          </Link>
          <Link href={"/details/3"} className={navigationLink}>
            다음글
          </Link>
        </div>
      </footer>
    </>
  );
}

export default studyPage;
