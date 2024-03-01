// import { headers } from "next/headers";

interface Credentials {
    user: string;
    password: string;
}
interface EndPoint {
    url: string;
}


export default function NfriApi() {
    this.creddentials = null;
    this.endPoint = null;
    this.headers = new Headers();

    this.setCredentials = function(myCredentials: Credentials): void {
        this.credentials = myCredentials;
        this.headers.append('Authorization', 'Basic ' + btoa(`${this.credentials.user}:${this.credentials.password}`));
        // this.headers.append('Authorization', 'Basic ' + `${this.credentials.user}:${this.credentials.password}`);
    }
    this.setEndpoint = function(myEndPoint: EndPoint): void {
        this.endPoint = myEndPoint;
    }
    this.getAsteroids = async function(tidStart:number,tidSlutt:number): Promise<any> {
        // console.log('Look to the stars!')
        // console.log('User: ',this.credentials.user)
        // console.log('Passwd: ',this.credentials.password)
        // console.log(this.headers)
        if (this.credentials && this.endPoint) {
            const myUrl = (this.endPoint.url + '?from=' + tidStart.toString() + '&to=' + tidSlutt.toString());
            await fetch(myUrl, {
                method: 'GET',
                headers: this.headers,
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`)
                }
                return response.json();
            });
        } else {
            // Not logged in
            if (!this.credentials) {
                throw new Error('Missing credentials. Set with NfriApi.setCredentials({user:\'name\',password:\'secret\'})')
            }
            // Missing endpoint
            if (!this.endPoint) {
                throw new Error('Missing endpoint. Set with NfriApi.setEndpoint({url:\'https://example.com:5000/api/v1/search\'})')
            }
            throw new Error('Not sure what went wrong here?')
        }
    }
}
