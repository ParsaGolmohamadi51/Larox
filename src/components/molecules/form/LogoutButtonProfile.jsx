"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/atom/buttons/ProfileButton";
import { logoutUser } from "@/services/LogoutService";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser();
      localStorage.removeItem("token");
      router.push("/auth");
    } catch (error) {
      alert(error.message || "مشکلی در خروج پیش آمد");
    }
  };

  return (
    <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700">
      خروج از حساب کاربری
    </Button>
  );
}
