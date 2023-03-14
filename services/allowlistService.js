
const allowlist = require('./test_al.json');

export async function AllowlistService(wallet) {
    const result = allowlist.filter((x) => x.address.toLowerCase() === wallet.toLowerCase());
    if(result.length > 0) {
        return result[0];
    } else {
        return undefined;
    }
}
