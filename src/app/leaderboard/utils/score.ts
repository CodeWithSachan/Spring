export type ContributionStats = {
  mergedPRs: number;
  closedPRs: number;
  reviewsApproved: number;
  helpfulComments: number;
  weeklyConsistency: number; // weeks active
  praisedPRs: number;
};

export function calculateScore(stats: ContributionStats): number {
  const base =
    stats.mergedPRs * 50 +
    stats.closedPRs * 10 +
    stats.reviewsApproved * 20 +
    stats.helpfulComments * 10 +
    stats.praisedPRs * 30;

  const consistencyBonus =
    stats.weeklyConsistency >= 3 ? 50 : stats.weeklyConsistency * 25;

  return base + consistencyBonus;
}
