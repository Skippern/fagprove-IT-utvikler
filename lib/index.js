const { default: NfriApi } = require("./NfriApi");

const myApi = new NfriApi()

const tidStart = Date.now();
const tidSlutt = Date.now() + 1000 * 60 * 60 * 24 * 3;

myApi.setCredentials({ user: "NFRI", password: "Astroidesoek24!" });
myApi.setEndpoint({ url: "http://10.165.8.121:5000/api/v1/search" })

let data = 'not set'
console.log('0: ',data)
async () => {
	data = await myApi.getAsteroids(tidStart, tidSlutt).then(console.log('1: '+data))
}
async() => {
	await new Promise( response => myApi.getAsteroids(tidStart, tidSlutt));
	(function() { console.log('2: ',data);},3000)
	console.log('3: ',data);
	(function() { console.log('4: ',data);},3000)
}
// console.log('5: ',data)
// data = myApi.getAsteroids(tidStart,tidSlutt)
// console.log('6: ',data)

async function myGetter() {
	data = await myApi.getAsteroids(tidStart,tidSlutt)
	await console.log('7: ',data)
}
myGetter()
// console.log('7: ',myApi.getAsteroids(tidStart,tidSlutt))
// (async () => {
// 	data = await myApi.getAsteroids(tidStart, tidSlutt);
// 	this.console.log('6: ',data);
// })().catch(err=>console.error(err));

