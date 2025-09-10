import axios from "axios";

export const logoutUser = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("توکن وجود ندارد. کاربر لاگین نیست.");
    }

    const response = await axios.post(
      "https://larux.seffeh.ir/api/v1/auth/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    localStorage.removeItem("token");
    sessionStorage.clear();

    return true;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "خروج ناموفق بود");
    } else {
      throw error;
    }
  }
};
