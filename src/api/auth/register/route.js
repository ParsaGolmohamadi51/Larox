export async function POST(req) {
  const body = await req.json();

  try {
    const res = await fetch("https://larux.seffeh.ir/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: body.full_name,
        phone: body.phone,
        password: body.password,
        password_confirmation: body.password_confirmation,
      }),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "خطا در اتصال به سرور" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
