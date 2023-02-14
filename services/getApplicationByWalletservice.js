export async function GetApplicationByWalletService(wallet) {
  try {
    console.log(wallet);
    const applications = [
      {
        id: 1,
        wallet: "0xfBfb23f7e71684172AaD50543C8ec5cF2F936876B",
        status: "pending",
        twitterId: "https://twitter.com/Akizuki230",
        discorId: "user#0001",
        valueLife:
          "We will be using an application system to give out allowlist spots for Invictus Order- however, there is a novel twist. In order to submit your application, you must mint a free soulbound token (SBT): Invictus Order Application. Your Invictus Order Application acts as on-chain proof of your submitted application. As Iron Hills approves applications, your SBT will dynamically update to show whether or not you have been accepted. At the time of mint, only those with approved SBTs may mint their Invictus Order. To submit an application for allowlist, click &quot;Apply Now&quot; above. For a deep dive on how the SBT and allowlist process works,",
        successInvictus:
          "nvictus Order is the culmination of over a year's worth of trying to push the boundaries of NFT art and technology. As a part of the Invictus Order, you have enlisted to join the Sector Task Force, an elite squad established to solve the mystery of The Altar.",
      },
      {
        id: 2,
        wallet: "0xRTTTT3f7e71684172AaD505DFGDFGDF2F936876B",
        status: "pending",
        twitterId: "https://twitter.com/Akizuki230",
        discorId: "user#0001",
        valueLife:
          "We will be using an application system to give out allowlist spots for Invictus Order- however, there is a novel twist. In order to submit your application, you must mint a free soulbound token (SBT): Invictus Order Application. Your Invictus Order Application acts as on-chain proof of your submitted application. As Iron Hills approves applications, your SBT will dynamically update to show whether or not you have been accepted. At the time of mint, only those with approved SBTs may mint their Invictus Order. To submit an application for allowlist, click &quot;Apply Now&quot; above. For a deep dive on how the SBT and allowlist process works,",
        successInvictus:
          "nvictus Order is the culmination of over a year's worth of trying to push the boundaries of NFT art and technology. As a part of the Invictus Order, you have enlisted to join the Sector Task Force, an elite squad established to solve the mystery of The Altar.",
      },
      {
        id: 3,
        wallet: "0xPPSDFP3f7e71684172AaD50543Cec5cF2F936876B",
        status: "refused",
        twitterId: "https://twitter.com/Akizuki230",
        discorId: "user#0001",
        valueLife:
          "We will be using an application system to give out allowlist spots for Invictus Order- however, there is a novel twist. In order to submit your application, you must mint a free soulbound token (SBT): Invictus Order Application. Your Invictus Order Application acts as on-chain proof of your submitted application. As Iron Hills approves applications, your SBT will dynamically update to show whether or not you have been accepted. At the time of mint, only those with approved SBTs may mint their Invictus Order. To submit an application for allowlist, click &quot;Apply Now&quot; above. For a deep dive on how the SBT and allowlist process works,",
        successInvictus:
          "nvictus Order is the culmination of over a year's worth of trying to push the boundaries of NFT art and technology. As a part of the Invictus Order, you have enlisted to join the Sector Task Force, an elite squad established to solve the mystery of The Altar.",
      },
      {
        id: 4,
        wallet: "0xPPSDFP3f7e71684172AaD50543Cec5cF2F936876B",
        status: "accepted",
        twitterId: "https://twitter.com/Akizuki230",
        discorId: "user#0001",
        valueLife:
          "We will be using an application system to give out allowlist spots for Invictus Order- however, there is a novel twist. In order to submit your application, you must mint a free soulbound token (SBT): Invictus Order Application. Your Invictus Order Application acts as on-chain proof of your submitted application. As Iron Hills approves applications, your SBT will dynamically update to show whether or not you have been accepted. At the time of mint, only those with approved SBTs may mint their Invictus Order. To submit an application for allowlist, click &quot;Apply Now&quot; above. For a deep dive on how the SBT and allowlist process works,",
        successInvictus:
          "nvictus Order is the culmination of over a year's worth of trying to push the boundaries of NFT art and technology. As a part of the Invictus Order, you have enlisted to join the Sector Task Force, an elite squad established to solve the mystery of The Altar.",
      },
      {
        id: 5,
        wallet: "0xPPSDFP3f7e71684172AaD50543Cec5cF2F936876B",
        status: "refused",
        twitterId: "https://twitter.com/Akizuki230",
        discorId: "user#0001",
        valueLife:
          "We will be using an application system to give out allowlist spots for Invictus Order- however, there is a novel twist. In order to submit your application, you must mint a free soulbound token (SBT): Invictus Order Application. Your Invictus Order Application acts as on-chain proof of your submitted application. As Iron Hills approves applications, your SBT will dynamically update to show whether or not you have been accepted. At the time of mint, only those with approved SBTs may mint their Invictus Order. To submit an application for allowlist, click &quot;Apply Now&quot; above. For a deep dive on how the SBT and allowlist process works,",
        successInvictus:
          "nvictus Order is the culmination of over a year's worth of trying to push the boundaries of NFT art and technology. As a part of the Invictus Order, you have enlisted to join the Sector Task Force, an elite squad established to solve the mystery of The Altar.",
      },
    ];

    const filter = applications.filter(
      (application) => application.wallet == wallet
    );

    return {
      status: "success",
      message: "All application loaded",
      data: filter,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Load all application failed",
    };
  }
}
