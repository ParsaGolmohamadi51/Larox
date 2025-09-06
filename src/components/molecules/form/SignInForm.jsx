"use client";
import { useState } from "react";
import InputAuth from "@/components/atom/inputs/InputAuth";
import ButtonAuth from "@/components/atom/buttons/ButtonAuth";
import LinkAuthText from "@/components/atom/Typography/LinkAuthText";

export default function SignInForm({ switchToSignUp, onForgotPassword  }) {
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold mb-2">ورود</h2>
      <InputAuth
        label="شماره تماس"
        type="number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <InputAuth
        label="رمز عبور"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <ButtonAuth>ورود</ButtonAuth>
      <LinkAuthText text="فراموشی رمز؟" onClick={onForgotPassword} />
      <LinkAuthText text="ثبت‌ نام" onClick={switchToSignUp} />
    </div>
  );
}
