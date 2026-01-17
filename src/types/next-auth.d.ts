import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "CONTRIBUTOR" | "MENTOR" | "ADMIN";
    } & DefaultSession["user"];
  }

  interface User {
    role: "CONTRIBUTOR" | "MENTOR" | "ADMIN";
  }
}
