export async function changePassword({ old_password, new_password, new_password_confirmation }) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("https://larux.seffeh.ir/api/v1/auth/change-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({
        old_password,
        new_password,
        new_password_confirmation,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "خطا در تغییر رمز عبور");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
