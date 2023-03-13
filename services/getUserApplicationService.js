import axios from "axios";

export async function GetApplicationService(account) {
  try {
    const soulboundType = [
      {
        name: "espejo roto",
        type: 0,
        items: 2,
      },
      {
        name: "espejo sin reflejo",
        type: 1,
        items: 2,
      },
      {
        name: "espejo con reflejo",
        type: 2,
        items: 2,
      },
      {
        name: "sin soulbound",
        type: 3,
        items: 2,
      },
    ];

    return soulboundType[2];
  } catch (error) {
    throw error;
  }
}
