import Image from "next/image";
import Link from "next/link";
import styles from "./education.css";

function Education() {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} blue`}>
        <span className={styles.cardTitleWrap}>
          <span className={`${styles.cardTitle} blue`}>대학활동</span>
        </span>

        <div>
          <div className={styles.imgContainer}>
            <Image
              src={"/images/ci_4.png"}
              alt="학교로고"
              width={160}
              height={160}
              className={styles.img}
              priority
            />
          </div>

          <p className={styles.cardContent}>
            <span>컴퓨터시스템과 졸업</span>
            <br />
            C#, JAVA, 웹&앱, 알고리즘, 자료구조 등 전반적 프로그래밍 교육 이수
          </p>
        </div>

        <div>
          <Link href={"#"} aria-label="더 알아보기"></Link>
        </div>
      </div>

      <div className={`${styles.card} black`}>
        <span className={styles.cardTitleWrap}>
          <span className={`${styles.cardTitle} black`}>지식공유</span>
        </span>

        <div>
          <div className={styles.imgList}>
            <Image
              src={"/images/toss-deep-dive.png"}
              alt="toss diving club"
              width={160}
              height={160}
              priority
              className={styles.img}
            />

            <Image
              src={"/images/awskrclub.jpg"}
              alt="awskrug"
              width={160}
              height={160}
              priority
              className={styles.img}
            />

            <Image
              src={"/images/kakao-open.png"}
              alt="카카오오픈체팅"
              width={160}
              height={160}
              priority
              className={styles.img}
            />
          </div>

          <p className={styles.cardContent}>
            <br />
            Toss(Frontend Diving Club), AWSKRUG, Kakao 오픈톡 등 다양한 지식공유
            활동중
          </p>
        </div>
      </div>

      <div className={`${styles.card} green`}>
        <span className={styles.cardTitleWrap}>
          <span className={`${styles.cardTitle} green`}>병역</span>
        </span>

        <div>
          <div>
            <Image
              src={"/images/kr-mark.png"}
              alt="toss diving club"
              width={160}
              height={160}
              priority
              className={`${styles.img} bg-none`}
            />
          </div>

          <p className={styles.cardContent}>
            육군병 만기전역으로 대한민국 국방의무 수행
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
