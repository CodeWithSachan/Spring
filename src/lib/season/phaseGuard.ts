import { getCurrentSeason } from "./getCurrentSeason";
import { SeasonPhase } from "./phases";

export async function phaseGuard(requiredPhase: SeasonPhase) {
  const season = await getCurrentSeason();

  if (!season) {
    return {
      allowed: false,
      reason: "No active season",
    };
  }

  const now = new Date();

  let currentPhase: SeasonPhase;

  if (
    now >= season.registrationFrom &&
    now <= season.registrationTo
  ) {
    currentPhase = "REGISTRATION";
  } else if (
    now >= season.contributionFrom &&
    now <= season.contributionTo
  ) {
    currentPhase = "CONTRIBUTION";
  } else if (now > season.contributionTo) {
    currentPhase = "RECOGNITION";
  } else {
    currentPhase = "EVALUATION";
  }

  if (currentPhase !== requiredPhase) {
    return {
      allowed: false,
      reason: `Current phase is ${currentPhase}`,
      currentPhase,
    };
  }

  return {
    allowed: true,
    season,
    currentPhase,
  };
}
