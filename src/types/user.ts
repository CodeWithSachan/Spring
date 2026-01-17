export interface AppUser {
  id: string;
  email: string;
  name?: string;
  role: "GUEST" | "REGISTERED" | "APPROVED" | "CONTRIBUTOR" | "ADMIN";
}
