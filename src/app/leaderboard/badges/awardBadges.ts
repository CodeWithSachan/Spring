import { Badge } from "./badgeTypes";
import { BADGES } from "./badges";
import { ContributionStats } from "../utils/score";

export function awardBadges(stats: ContributionStats): Badge[] {
  const earned: Badge[] = [];

  if (stats.mergedPRs >= 1) earned.push(BADGES.find(b => b.id === "first-pr")!);
  if (stats.mergedPRs >= 3) earned.push(BADGES.find(b => b.id === "consistent")!);
  if (stats.reviewsApproved >= 3) earned.push(BADGES.find(b => b.id === "mentor")!);
  if (stats.weeklyConsistency >= 4) earned.push(BADGES.find(b => b.id === "season-finisher")!);

  return earned;
}
