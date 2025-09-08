export async function registerUser(formData) {
  const response = await fetch("https://larux.seffeh.ir/api/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "خطا در ثبت نام");
  }

  return data;
}
