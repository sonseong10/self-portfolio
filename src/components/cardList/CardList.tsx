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
    type: "normal",
  },
  {
    title: "취업난에 이은 공백기 어떤 활동중인가요",
    category: "개발",
    tags: ["#공부", "#취준생", "#병목현상"],
    image: { type: "image", src: "/images/image.webp" },
    type: "normal",
  },
  {
    title: "GitHub 활동 정보",
    category: "개발",
    tags: ["#커밋수", "#개발활동"],
    components: <div></div>,
    type: "row",
  },
  {
    title: "보유한 기술스택",
    category: "개발",
    tags: ["#Frontend", "#React", "#Next"],
    image: { type: "logo", src: "/images/3d_code_icon.webp" },
    type: "normal",
  },
  {
    title: "여가시간 취미와 특기",
    category: "개인",
    tags: ["#오락실게임", "#3D-image"],
    image: { type: "image", src: "/images/blender-icon.png" },
    type: "normal",
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
  },
];

function CardItem({
  title,
  category,
  type,
  tags,
  image,
  components,
}: (typeof cardData)[0]) {
  return (
    <li className={`${listItem} ${type}`}>
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

        {image ? (
          <Image
            src={image.src}
            alt={`${title}`}
            width={100}
            height={100}
            className={`${areaThumbnail} ${image.type}`}
            priority
          />
        ) : components ? (
          components
        ) : null}
      </a>
    </li>
  );
}

function CardList() {
  return (
    <ul className={list}>
      {[...cardData, ...cardData].map((item, index) => (
        <CardItem key={index} {...item} aria-hidden={index > cardData.length} />
      ))}
    </ul>
  );
}

export default CardList;
