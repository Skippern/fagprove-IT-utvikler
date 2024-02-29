const NfriApi = require("./NfriApi");

const tidStart = Date.now();
const tidSlutt = Date.now() + 1000 * 60 * 60 * 24 * 3;

NfriApi.setCredentials({user: "NFRI", password: "Asteroidesoek24!"});
NfriApi.setEndpoint({url: "http://10.165.8.121:5000/api/v1/search"})

(async () => {
	const data = await NfriApi().getAsteroids(tidStart, tidSlutt);
	console.log(data);
})().catch(err=>console.error(err));

