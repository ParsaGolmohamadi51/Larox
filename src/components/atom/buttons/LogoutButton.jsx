"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { logoutUser } from "@/services/LogoutService";

export default function AuthButton({ onRegisterClick }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleClick = async () => {
    if (isLoggedIn) {
      try {
        await logoutUser();
        setIsLoggedIn(false);
        router.push("/auth");
      } catch (error) {
        alert(error.message || "مشکلی در خروج پیش آمد");
      }
    } else {
      if (onRegisterClick) {
        onRegisterClick();
      } else {
        router.push("/auth");
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg transition ${
        isLoggedIn
          ? "bg-red-600 text-white hover:bg-red-700"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {isLoggedIn ? "خروج" : "ثبت‌نام"}
    </button>
  );
}
