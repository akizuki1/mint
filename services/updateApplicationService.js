import axios from "axios";

export async function UpdateApplicationService(
  application,
  jwtToken,
) {
  try {
    const res = await axios.post(
      "http://localhost:7000/admin/application",
      {
        application,
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      }
    );
    const data = res.data;

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
