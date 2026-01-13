// app/projects/types/project.ts

export type ProjectDifficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type ProjectFilterState = {
  difficulty: ProjectDifficulty | "";
  tech: string;
  accepting: boolean | null;
  search: string;
};

export type ProjectSort =
  | "featured"
  | "beginner"
  | "newest";
