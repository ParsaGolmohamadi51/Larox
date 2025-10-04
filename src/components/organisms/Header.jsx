"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/atom/buttons/DashboardLoginButton";

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleDashboardClick = () => {
    router.push("/dashboard");
  };

  const handleLoginClick = () => {
    router.push("/auth");
  };

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      <h1 className="text-xl font-bold">لوگوی سایت</h1>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <Button onClick={handleDashboardClick}>حساب کاربری</Button>
        ) : (
          <Button onClick={handleLoginClick}>ورود/ثبت‌ نام</Button>
        )}
      </div>
    </header>
  );
}
