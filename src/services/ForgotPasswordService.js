import axios from "axios";

const BASE_URL = "https://larux.seffeh.ir/api/v1/auth";

export const sendForgetPasswordCode = async (phone) => {
  const res = await axios.post(`${BASE_URL}/forget-password`, { phone });
  return res.data;
};

export const verifyForgetPasswordCode = async (phone, code) => {
  const codeInt = parseInt(code, 10);
  if (isNaN(codeInt)) {
    throw new Error("کد تایید عدد است");
  }

  const res = await axios.post(`${BASE_URL}/forget-password-verify`, {
    phone,
    code: codeInt,
  });
  return res.data;
};
