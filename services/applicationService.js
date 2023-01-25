import axios from "axios";

export async function ApplicationService(
  wallet,
  jwtToken,
  discordID,
  twitterUrl,
  valueLife,
  successKnights
) {
  try {
    const res = await axios.post("https://knights.kfnc.net/users/apply", {
        wallet,
        content: {
          discordID,
          twitterUrl,
          valueLife,
          successKnights
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
