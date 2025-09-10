import axios from "axios";

export const loginUser = async (phone, password) => {
  const data = { phone, password };

  try {
    const response = await axios.post(
      "https://larux.seffeh.ir/api/v1/auth/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = response.data;

    if (result.data?.auth) {
      localStorage.setItem("token", result.data.auth);
      console.log("توکن ذخیره شد:", result.data.auth);
    } else {
      console.log("توکنی در پاسخ نبود");
    }

    console.log("توکن از localStorage:", localStorage.getItem("token"));

    return result;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "خطا در ارسال درخواست");
    } else {
      throw error;
    }
  }
};
