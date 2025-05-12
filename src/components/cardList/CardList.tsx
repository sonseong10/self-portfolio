import Image from "next/image";
import {
  areaContent,
  areaThumbnail,
  infoTag,
  infoTitle,
  infoType,
  list,
  listItem,
  listLink,
} from "./cardList.css";

const cardData = [
  {
    title: "첫회사 스타트업에서",
    category: "직무경험",
    tags: ["#스타트업", "#조기취업", "#1년 11개월"],
    image: { type: "logo", src: "/images/fastview_logo.png" },
  },
  {
    title: "취업난에 이은 공백기 어떤 활동중인가요",
    category: "개발",
    tags: ["#공부", "#취준생", "#n년"],
    image: { type: "image", src: "/images/image.webp" },
  },
  {
    title: "GitHub 활동 정보",
    category: "개발",
    tags: ["#스타트업", "#조기취업", "#1년 11개월"],
    image: { type: "logo", src: "/images/fastview_logo.png" },
  },
  {
    title: "여가시간 취미와 특기",
    category: "개인",
    tags: ["#스타트업", "#조기취업", "#1년 11개월"],
    image: { type: "image", src: "/images/image.webp" },
  },
  {
    title: "issue pick",
    category: "개발",
    tags: ["#스타트업", "#조기취업", "#1년 11개월"],
    image: { type: "logo", src: "/images/fastview_logo.png" },
  },
  // 필요시 더 추가
];

function CardItem({ title, category, tags, image }: (typeof cardData)[0]) {
  return (
    <li className={`${listItem}`}>
      <a href="" className={`${listLink}`}>
        <div className={`${areaContent}`}>
          <span className={infoType}>{category}</span>
          <strong className={infoTitle}>{title}</strong>
          <span className={infoTag} role="text">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </span>
        </div>

        <Image
          src={image.src}
          alt={`${title}`}
          width={100}
          height={100}
          className={`${areaThumbnail} ${image.type}`}
        />
      </a>
    </li>
  );
}

function CardList() {
  return (
    <ul className={list}>
      {[...cardData, ...cardData].map((item, index) => (
        <CardItem key={index} {...item} />
      ))}
    </ul>
  );
}

export default CardList;
