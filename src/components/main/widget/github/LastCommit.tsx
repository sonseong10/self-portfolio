import Link from "next/link";
import { badge, historyList, linkBox, listItem } from "./lastCommit.css";

type Commit = {
  message: string;
  author: string;
  date: string;
  repo: string;
  url: string;
  error: string;
};

export default async function LastCommit() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/last-commit`, {
    cache: "no-store",
  });

  const contentType = res.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    const html = await res.text();
    console.error("HTML received instead of JSON:", html.slice(0, 100));
    throw new Error("API returned HTML instead of JSON.");
  }

  const commit: Commit = await res.json();

  const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <Link
      className={linkBox}
      href={typeof commit?.error === "string" ? "https://github.com/sonseong10" : commit.url}
      target="_blank"
    >
      <div>
        <span className={badge}>최근 커밋</span>
      </div>
      {typeof commit?.error === "string" ? (
        <span>{"7일 이내 작업한 커밋이 없습니다."}</span>
      ) : (
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
      )}
    </Link>
  );
}
