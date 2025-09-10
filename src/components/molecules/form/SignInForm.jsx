"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputAuth from "@/components/atom/inputs/AuthInput";
import ButtonAuth from "@/components/atom/buttons/AuthButton";
import LinkAuthText from "@/components/atom/Typography/LinkAuthText";
import { loginUser } from "@/services/loginService";

export default function SignInForm({ switchToSignUp, onForgotPassword }) {
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await loginUser(form.phone, form.password);
      console.log("نتیجه ورود:", result);
      console.log("توکن ذخیره شده:", localStorage.getItem("token"));
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
      <ButtonAuth onClick={handleLogin}>ورود</ButtonAuth>
      <LinkAuthText text="فراموشی رمز؟" onClick={onForgotPassword} />
      <LinkAuthText text="ثبت‌ نام" onClick={switchToSignUp} />
    </div>
  );
}
