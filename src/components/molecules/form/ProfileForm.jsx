"use client";
import { useState, useEffect } from "react";
import Input from "@/components/atom/inputs/ProfileInput";
import Button from "@/components/atom/buttons/ProfileButton";
import { updateUserProfile } from "@/services/EditUserProfileService";
import { changePassword } from "@/services/EditPasswordProfileService";

export default function UserProfileForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setFullName(localStorage.getItem("full_name") || "");
    setPhone(localStorage.getItem("phone") || "");
  }, []);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await updateUserProfile({ full_name: fullName, phone });
      localStorage.setItem("full_name", fullName);
      localStorage.setItem("phone", phone);
      console.log("پاسخ سرور:", data);
      alert("اطلاعات با موفقیت ارسال و ذخیره شد!");
    } catch (error) {
      console.error("Error:", error);
      alert("ارسال اطلاعات موفق نبود!");
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("رمز عبور جدید و تکرار آن مطابقت ندارند!");
      return;
    }

    try {
      const data = await changePassword({
        phone,
        old_password: currentPassword,
        new_password: newPassword,
        new_password_confirmation: confirmPassword,
      });
      console.log("پاسخ سرور:", data);
      alert("رمز عبور با موفقیت تغییر کرد!");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "تغییر رمز عبور موفق نبود!");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={handleProfileSubmit} className="flex flex-col gap-4">
        <Input
          label="نام کامل"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          label="شماره تماس"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button type="submit" className="bg-green-600 hover:bg-green-700">
          ذخیره تغییرات
        </Button>
      </form>

      <form
        onSubmit={handlePasswordSubmit}
        className="flex flex-col gap-4 mt-6"
      >
        <Input
          label="رمز عبور فعلی"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Input
          label="رمز عبور جدید"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Input
          label="تکرار رمز عبور جدید"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          تغییر رمز عبور
        </Button>
      </form>
    </div>
  );
}
