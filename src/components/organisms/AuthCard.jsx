"use client";
import { useState } from "react";
import SignUpForm from "@/components/molecules/form/SignUpForm";
import SignInForm from "@/components/molecules/form/SignInForm";
import ForgotPasswordForm from "@/components/molecules/form/ForgotPasswordForm";

export default function AuthCard() {
  const [mode, setMode] = useState("signup");

  return (
    <div className="max-w-sm mx-auto mt-20 bg-white shadow-lg rounded-2xl p-6">
      {mode === "signup" && (
        <SignUpForm switchToSignIn={() => setMode("signin")} />
      )}
      {mode === "signin" && (
        <SignInForm
          switchToSignUp={() => setMode("signup")}
          onForgotPassword={() => setMode("forgot")}
        />
      )}
      {mode === "forgot" && (
        <ForgotPasswordForm switchToSignIn={() => setMode("signin")} />
      )}
    </div>
  );
}
