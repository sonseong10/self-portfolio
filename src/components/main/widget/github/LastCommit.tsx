import Link from "next/link";
import { badge, historyList, linkBox, listItem } from "./lastCommit.css";

type Commit = {
  message?: string;
  author?: string;
  date?: string;
  repo?: string;
  url?: string;
  error?: string;
};

export default async function LastCommit() {
  const username = "sonseong10";
  let commit: Commit = {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/github-commit`, {
      cache: "no-store",
    });
    commit = await res.json();
  } catch (e) {
    console.error(e)
    commit.error = "API 요청 실패";
  } 

  const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const hasCommit = !commit.error && commit.repo && commit.message;
  const href = hasCommit ? commit.url : `https://github.com/${username}`;

  return (
    <Link className={linkBox} href={href!} target="_blank">
      <div>
        <span className={badge}>최근 커밋</span>
      </div>
      {hasCommit ? (
        <dl className={historyList}>
          <div>
            <dt>레포지토리</dt>
            <dd className={listItem}>
              {commit.repo?.split("/").pop() ?? "알 수 없음"}
            </dd>
          </div>
          <div>
            <dt>메시지</dt>
            <dd className={listItem}>{commit.message}</dd>
          </div>
          <div>
            <dt className="screen_out">날짜</dt>
            <dd className={`${listItem} date`}>
              {commit.date ? dateFormatter.format(new Date(commit.date)) : "-"}
            </dd>
          </div>
        </dl>
      ) : (
        <span>{commit.error ?? "최근 작업한 커밋이 없습니다."}</span>
      )}
    </Link>
  );
}
