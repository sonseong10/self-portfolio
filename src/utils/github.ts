import type { NextApiRequest, NextApiResponse } from "next";

const GITHUB_USERNAME = "sonseong10";
// const TOKEN = process.env.GITHUB_TOKEN;

export default async function githubLastCommitAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://api.github.com/${GITHUB_USERNAME}/events`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Authorization: TOKEN ? `token ${TOKEN}` : undefined,
        },
      }
    );

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch commits" });
    }

    const commits = await response.json();
    console.log(commits);

    // const latestCommit = commits[0]; // 가장 최근 커밋

    // res.status(200).json({
    //   message: latestCommit.commit.message,
    //   url: latestCommit.html_url,
    //   author: latestCommit.commit.author.name,
    //   date: latestCommit.commit.author.date,
    // });
  } catch (error: unknown) {
    res.status(500).json({
      error: "Internal server error",
      code: (error as { code: number })?.code,
    });
  }
}
