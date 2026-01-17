import type { Season } from "@prisma/client";

export type SeasonPhase =
  | "REGISTRATION"
  | "CONTRIBUTION"
  | "CLOSED";

export function getSeasonPhase(season: Season): SeasonPhase {
  const now = new Date();

  if (
    now >= season.registrationFrom &&
    now <= season.registrationTo
  ) {
    return "REGISTRATION";
  }

  if (
    now >= season.contributionFrom &&
    now <= season.contributionTo
  ) {
    return "CONTRIBUTION";
  }

  return "CLOSED";
}
