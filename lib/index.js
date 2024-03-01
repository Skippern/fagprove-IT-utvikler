const { default: NfriApi } = require("./NfriApi");

const myApi = new NfriApi()

const tidStart = Date.now();
const tidSlutt = Date.now() + 1000 * 60 * 60 * 24 * 3;

myApi.setCredentials({ user: "NFRI", password: "Asteroidesoek24!" });
myApi.setEndpoint({ url: "http://10.165.8.121:5000/api/v1/search" })

(async () => {
	const data = await myApi.getAsteroids(tidStart, tidSlutt);
	console.log(data);
})().catch(err=>console.error(err));

