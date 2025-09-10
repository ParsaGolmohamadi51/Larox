"use client";
import { useState } from "react";
import InputAuth from "@/components/atom/inputs/AuthInput";
import ButtonAuth from "@/components/atom/buttons/AuthButton";
import LinkAuthText from "@/components/atom/Typography/LinkAuthText";
import { registerUser } from "@/services/registrationService";

export default function SignUpForm({ switchToSignIn }) {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !form.full_name ||
      !form.phone ||
      !form.password ||
      !form.password_confirmation
    ) {
      setError("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    if (form.full_name.length < 3) {
      setError("نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد.");
      return;
    }

    if (form.password.length < 6) {
      setError("رمز عبور باید حداقل ۶ کاراکتر باشد.");
      return;
    }

    if (form.password !== form.password_confirmation) {
      setError("رمز عبور و تایید آن یکسان نیستند.");
      return;
    }

    if (!/^\d{11}$/.test(form.phone)) {
      setError("شماره موبایل باید ۱۱ رقم باشد.");
      return;
    }

    setLoading(true);

    try {
      const data = await registerUser(form);

      if (data?.error === "PHONE_ALREADY_EXISTS") {
        setError("این شماره قبلا ثبت نام کرده است.");
        return;
      }

      setSuccess("ثبت نام با موفقیت انجام شد");
      setForm({
        full_name: "",
        phone: "",
        password: "",
        password_confirmation: "",
      });

      if (switchToSignIn) switchToSignIn();

    } catch (err) {
      if (err.message.includes("Failed to fetch")) {
        setError("این شماره قبلا ثبت نام کرده است یا مشکل شبکه وجود دارد.");
      } else {
        setError(err.message || "خطایی رخ داده است.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-2">ثبت نام</h2>

      <InputAuth
        label="نام و نام خانوادگی"
        type="text"
        value={form.full_name}
        onChange={(e) => setForm({ ...form, full_name: e.target.value })}
      />

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

      <InputAuth
        label="تایید رمز عبور"
        type="password"
        value={form.password_confirmation}
        onChange={(e) =>
          setForm({ ...form, password_confirmation: e.target.value })
        }
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}

      <ButtonAuth type="submit" disabled={loading}>
        {loading ? "در حال ثبت نام..." : "ثبت نام"}
      </ButtonAuth>

      <LinkAuthText text="ورود" onClick={switchToSignIn} />
    </form>
  );
}
