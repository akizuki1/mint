import axios from "axios";

export async function AuthService(account, signature, message) {
  try {
    const res = await axios.post("https://knights.kfnc.net/auth/login", {
      message,
      wallet: account,
      signature,
    });

    const user = {
      wallet: res.data.wallet,
      token: res.data.token,
      clientId: res.data.clientId,
    };

    const accessToken = res.data.access_token;

    return { user, accessToken };
  } catch (error) {
    throw error;
  }
}

export async function AdminAuthService(account, signature, message) {
  try {
    const res = await axios.post("http://localhost:7000/auth/admin/login", {
      message,
      wallet: account,
      signature
    });
    console.log(res);
    const accessToken = res.data.access_token;
    const applications = res.data.applications;
    return { applications, accessToken };
  } catch (error) {
    throw error;
  }
}
