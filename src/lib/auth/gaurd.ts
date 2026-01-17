// src/lib/auth/guard.ts

export function registrationMessage() {
  const REGISTRATION_END = new Date("2026-02-28T23:59:59Z");
  const now = new Date();

  if (now <= REGISTRATION_END) {
    return {
      blocked: true,
      message:
        "Spring 2026 contributions start from March 1, 2026. Please complete the registration form before contributing.",
    };
  }

  return {
    blocked: false,
    message: null,
  };
}
