export const logoutUser = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("توکن وجود ندارد. کاربر لاگین نیست.");
    }

    const response = await fetch("https://larux.seffeh.ir/api/v1/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "خروج ناموفق بود");
    }

    localStorage.removeItem("token");
    sessionStorage.clear();

    return true;
  } catch (error) {
    throw error;
  }
};
