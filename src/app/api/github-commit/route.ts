import { NextResponse } from "next/server";

const USERNAME = "sonseong10";

interface Commit {
  sha: string;
  author: {
    name: string;
    email: string;
  };
  message: string;
  url: string;
}

interface PushEvent {
  type: "PushEvent";
  repo: {
    name: string;
  };
  actor: {
    login: string;
    avatar_url: string;
  };
  payload: {
    commits?: Commit[];
    head: string;
  };
  created_at: string;
}

type GitHubEvent = PushEvent;

export async function GET() {
  const url = `https://api.github.com/users/${USERNAME}/events/public`;

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 60 }, // ISR 캐시 (60초)
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "GitHub API 요청 실패" },
        { status: res.status }
      );
    }

    const data: GitHubEvent[] = await res.json();
    const pushEvent = data.find((event) => event.type === "PushEvent");

    if (!pushEvent) {
      return NextResponse.json(
        { error: "최근 PushEvent가 없습니다." },
        { status: 404 }
      );
    }

    const latestCommit = pushEvent.payload.commits?.at(-1);
    const latestSha = latestCommit?.sha ?? pushEvent.payload.head;

    return NextResponse.json({
      message: latestCommit?.message ?? "커밋 메시지 없음",
      author: latestCommit?.author?.name ?? pushEvent.actor.login,
      date: pushEvent.created_at,
      repo: pushEvent.repo.name,
      url: `https://github.com/${pushEvent.repo.name}/commit/${latestSha}`,
    });
  } catch (e) {
    return NextResponse.json(
      { error: "서버 에러", detail: String(e) },
      { status: 500 }
    );
  }
}
