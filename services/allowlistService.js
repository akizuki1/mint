
const allowlist = require('./invictus_al.json');

export async function AllowlistService(wallet) {
    const result = allowlist.filter((x) => x.address.toLowerCase() === wallet.toLowerCase());
    if(result.length > 0) {
        return result[0];
    } else {
        return undefined;
    }
}
