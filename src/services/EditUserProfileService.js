export async function updateUserProfile({ full_name, phone }) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("https://larux.seffeh.ir/api/v1/auth/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ full_name, phone }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "خطا در ارسال اطلاعات");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
