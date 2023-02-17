import axios from "axios";

export async function ApplicationService(
  wallet,
  jwtToken,
  discordID,
  twitterUrl,
  valueLife,
  successInvictus
) {
  try {
    const res = await axios.post("https://invictus.kfnc.net/users/apply", {
        wallet,
        content: {
          discordID,
          twitterUrl,
          valueLife,
          successInvictus
        }
    }, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    });
    const data = res.data;

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
