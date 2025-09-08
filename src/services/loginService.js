export const loginUser = async (phone, password) => {
  const data = { phone, password };

  try {
    const response = await fetch("https://larux.seffeh.ir/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "خطا در ارسال درخواست");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
