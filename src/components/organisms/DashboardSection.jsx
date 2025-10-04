"use client";
import ProfileForm from "@/components/molecules/form/ProfileForm";
import LogoutButton from "@/components/molecules/form/LogoutButtonProfile";

export default function DashboardSection() {
  return (
    <div className="p-8 max-w-2xl mx-auto flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4">داشبورد کاربر</h1>
      <ProfileForm />
      <LogoutButton />
    </div>
  );
}
