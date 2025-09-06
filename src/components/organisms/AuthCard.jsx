"use client";
import { useState } from "react";
import SignUpForm from "@/components/molecules/form/SignUpForm";
import SignInForm from "@/components/molecules/form/SignInForm";

export default function AuthCard() {
  const [mode, setMode] = useState("signup");

  return (
    <div className="max-w-sm mx-auto mt-20 bg-white shadow-lg rounded-2xl p-6">
      {mode === "signup" ? (
        <SignUpForm switchToSignIn={() => setMode("signin")} />
      ) : (
        <SignInForm switchToSignUp={() => setMode("signup")} />
      )}
    </div>
  );
}
