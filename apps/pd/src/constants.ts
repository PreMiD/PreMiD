import createKeyv from "./functions/createKeyv.js";
import getGoogleAddresses from "./functions/getGoogleAddresses.js";

export const keyv = createKeyv(),
	googleCIDRs = await getGoogleAddresses();
