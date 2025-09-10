import axios from "axios";

export async function registerUser(formData) {
  try {
    const response = await axios.post(
      "https://larux.seffeh.ir/api/v1/auth/register",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "خطا در ثبت نام");
    } else {
      throw error;
    }
  }
}
