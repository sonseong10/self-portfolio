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
    title: "여가시간 취미와 특기",
    category: "개인",
    tags: ["#오락실게임", "#3D-image"],
    image: { type: "image", src: "/images/blender-icon.png" },
    type: "normal",
    link: "/details/4",
  },
  {
    title: "첫회사 스타트업에서",
    category: "직무경험",
    tags: ["#스타트업", "#조기취업", "#1년 11개월"],
    image: { type: "logo", src: "/images/fastview_logo.png" },
    type: "normal",
    link: "/details/1",
  },
  {
    title: "취업난에 이은 공백기 어떤 활동중인가요",
    category: "개발",
    tags: ["#공부", "#취준생", "#병목현상"],
    image: { type: "image", src: "/images/image.webp" },
    type: "normal",
    link: "/details/2",
  },
  {
    title: "GitHub 활동 정보",
    category: "개발",
    tags: ["#가장많이사용한", "#개발언어"],
    image: {
      type: "image",
      src: "https://github-readme-stats.vercel.app/api/top-langs/?username=sonseong10&layout=compact&hide_border=true&bg_color=00000000&title_color=00000000&text_color=6b7280",
    },
    type: "row",
    link: "https://github.com/sonseong10",
  },
  {
    title: "보유한 기술스택",
    category: "개발",
    tags: ["#Frontend", "#React", "#Next"],
    image: { type: "logo", src: "/images/3d_code_icon.webp" },
    type: "normal",
    link: "/details/3",
  },
  {
    title: "issue pick",
    category: "개발",
    tags: ["#최근이슈", "#새로운소식"],
    image: {
      type: "logo",
      src: "/images/styled_logo.png",
    },
    type: "normal",
    link: "/details/5",
  },
];

function CardItem({
  title,
  category,
  type,
  tags,
  image,
  link,
}: (typeof cardData)[0]) {
  return (
    <li className={`${listItem} ${type}`}>
      <a href={link} className={`${listLink}`}>
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
          priority
          unoptimized
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
