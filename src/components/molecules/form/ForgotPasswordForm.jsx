"use client";
import { useState } from "react";
import InputAuth from "@/components/atom/inputs/AuthInput";
import ButtonAuth from "@/components/atom/buttons/AuthButton";
import LinkAuthText from "@/components/atom/Typography/LinkAuthText";
import {
  sendForgetPasswordCode,
  verifyForgetPasswordCode,
} from "@/services/ForgotPasswordService";

export default function ForgotPasswordForm({ switchToSignIn }) {
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendCode = async () => {
    try {
      setLoading(true);
      setMessage("");
      const data = await sendForgetPasswordCode(phone);
      setMessage(data.message || "کد تایید ارسال شد");
      setStep(2);
    } catch (err) {
      setMessage(
        err.response?.data?.message || err.message || "خطا در ارسال کد"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    try {
      setLoading(true);
      setMessage("");
      const data = await verifyForgetPasswordCode(phone, verificationCode);
      const successMessage = data.message || "رمز جدید برای شما ارسال شد";

      alert("رمز جدید با موفقیت ارسال شد");
      setMessage(successMessage);

      setTimeout(() => switchToSignIn(), 1500);
    } catch (err) {
      setMessage(
        err.response?.data?.message ||
          err.message ||
          "کد تایید یا شماره اشتباه است"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold mb-2">فراموشی رمز عبور</h2>

      {step === 1 && (
        <>
          <InputAuth
            label="شماره تماس"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <ButtonAuth onClick={handleSendCode} disabled={loading || !phone}>
            {loading ? "در حال ارسال..." : "ارسال کد تایید"}
          </ButtonAuth>
        </>
      )}

      {step === 2 && (
        <>
          <InputAuth
            label="کد تایید"
            type="number"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <ButtonAuth
            onClick={handleVerifyCode}
            disabled={loading || !verificationCode}
          >
            {loading ? "در حال بررسی..." : "تایید"}
          </ButtonAuth>
        </>
      )}

      {message && <p className="text-sm text-red-500">{message}</p>}

      <LinkAuthText text="بازگشت به ورود" onClick={switchToSignIn} />
    </div>
  );
}
