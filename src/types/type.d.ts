export interface ISkillsData {
  alpa: number;
  name: string;
  score: number;
  uid: number;
}

export interface IProjectData {
  deployURL: string;
  desc: string;
  githubURL: string;
  personnel: number;
  role: string;
  stack: {name: string; value: string}[] | string[];
  thumbnailURL: string;
  title: string;
  uid: number;
}

export interface IArtWorkData {
  designURL: string;
  thumbnailURL: string;
  title: string;
  uid: number;
}
