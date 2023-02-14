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
      },
      {
        id: 2,
        wallet: "0xRTTTT3f7e71684172AaD505DFGDFGDF2F936876B",
        status: "pending",
        twitterId: "https://twitter.com/Akizuki230",
        discorId: "user#0001",
      },
      {
        id: 3,
        wallet: "0xPPSDFP3f7e71684172AaD50543Cec5cF2F936876B",
        status: "refused",
        twitterId: "https://twitter.com/Akizuki230",
        discorId: "user#0001",
      },
      {
        id: 4,
        wallet: "0xPPSDFP3f7e71684172AaD50543Cec5cF2F936876B",
        status: "accepted",
        twitterId: "https://twitter.com/Akizuki230",
        discorId: "user#0001",
      },
      {
        id: 5,
        wallet: "0xPPSDFP3f7e71684172AaD50543Cec5cF2F936876B",
        status: "refused",
        twitterId: "https://twitter.com/Akizuki230",
        discorId: "user#0001",
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
