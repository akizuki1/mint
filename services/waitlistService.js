
const waitlist = require('./invictus_wl.json');

export async function WaitlistService(wallet) {
    const result = waitlist.filter((x) => x.toLowerCase() === wallet.toLowerCase());
    if(result.length > 0) {
        return result[0];
    } else {
        return undefined;
    }
}
