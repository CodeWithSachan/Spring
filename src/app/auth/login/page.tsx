"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <button
        onClick={() =>
          signIn("github", {
            callbackUrl: "/projects",
          })
        }
        className="
          px-6 py-3
          rounded-xl
          bg-white text-black
          font-medium
          hover:bg-gray-200
          transition
        "
      >
        Continue with GitHub
      </button>
    </div>
  );
}
