"use client";
import { useState } from "react";
import InputAuth from "@/components/atom/inputs/InputAuth";
import ButtonAuth from "@/components/atom/buttons/ButtonAuth";
import LinkAuthText from "@/components/atom/Typography/LinkAuthText";

export default function ForgotPasswordForm({ switchToSignIn }) {
  const [form, setForm] = useState({
    phone: "",
    verificationCode: "",
  });

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold mb-2">فراموشی رمز عبور</h2>
      <InputAuth
        label="شماره تماس"
        type="number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <InputAuth
        label="کد تایید"
        type="text"
        value={form.verificationCode}
        onChange={(e) => setForm({ ...form, verificationCode: e.target.value })}
      />
      <ButtonAuth>تایید و دریافت رمز جدید</ButtonAuth>

      <LinkAuthText text="بازگشت به ورود" onClick={switchToSignIn} />
    </div>
  );
}
