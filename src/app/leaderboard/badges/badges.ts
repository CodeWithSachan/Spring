import { Badge } from "./badgeTypes";

export const BADGES: Badge[] = [
  {
    id: "first-pr",
    label: "First PR",
    icon: "🟢",
    description: "Merged your first pull request",
  },
  {
    id: "consistent",
    label: "Consistent Contributor",
    icon: "🔵",
    description: "3 or more merged PRs",
  },
  {
    id: "mentor",
    label: "Mentor",
    icon: "🤝",
    description: "Helped other contributors",
  },
  {
    id: "season-finisher",
    label: "Season Finisher",
    icon: "🌱",
    description: "Completed the entire season",
  },
];
