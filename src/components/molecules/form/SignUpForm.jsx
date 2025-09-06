"use client";
import { useState } from "react";
import InputAuth from "@/components/atom/inputs/InputAuth";
import ButtonAuth from "@/components/atom/buttons/ButtonAuth";
import LinkAuthText from "@/components/atom/Typography/LinkAuthText";

export default function SignUpForm({ switchToSignIn }) {
  const [form, setForm] = useState({
    username: "",
    phone: "",
    password: "",
  });

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold mb-2">ثبت نام</h2>
      <InputAuth
        label="یوزرنیم"
        type="text"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <InputAuth
        label="شماره تماس"
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <InputAuth
        label="رمز عبور"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <ButtonAuth>ثبت نام</ButtonAuth>
      <LinkAuthText text="قبلا ثبت‌نام کردی؟" onClick={switchToSignIn} />
    </div>
  );
}
