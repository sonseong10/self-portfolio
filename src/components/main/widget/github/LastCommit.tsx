import Link from "next/link";
import { badge, historyList, linkBox, listItem } from "./lastCommit.css";

type Commit = {
  message: string;
  author: string;
  date: string;
  repo: string;
  url: string;
};

export default async function LastCommit() {
  const baseUrl = process.env.VERCEL_URL?.startsWith("localhost")
    ? "http://localhost:3000"
    : `https://${
        process.env.VERCEL_URL ?? "https://self-portfolio-omega.vercel.app"
      }`;

  const res = await fetch(`${baseUrl}/api/last-commit`, {
    cache: "no-store",
  });

  console.log(baseUrl);

  const commit: Commit = await res.json();

  const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <Link className={linkBox} href={commit.url} target="_blank">
      <div>
        <span className={badge}>최근 커밋 </span>
      </div>
      <dl className={historyList}>
        <div>
          <dt>레포지토리</dt>
          <dd className={listItem}>{commit.repo.split("/").pop()}</dd>
        </div>
        <div>
          <dt>메시지</dt>
          <dd className={listItem}>{commit.message}</dd>
        </div>
        <div>
          <dt className="screen_out">날짜</dt>
          <dd className={`${listItem} date`}>
            {dateFormatter.format(new Date(commit.date))}
          </dd>
        </div>
      </dl>
    </Link>
  );
}
