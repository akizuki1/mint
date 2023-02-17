import axios from "axios";

export async function GetUserService(account, jwtToken) {
  try {
    const res = await axios.get("https://invictus.kfnc.net/users/" + account, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const user = res.data;

    return user;
  } catch (error) {
    throw error;
  }
}
