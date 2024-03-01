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
    this.getAsteroids = function(tidStart:number,tidSlutt:number): any {
        if (this.credentials && this.endPoint) {
            let myUrl = (this.endPoint.url + '?from=' + tidStart.toString() + '&to=' + tidSlutt.toString());
            fetch(myUrl, {
                method: 'GET',
                headers: this.headers,
            })
            .then(response => {
                if (!response.ok) {
                    this.console.log(`HTTP Error ${response.status}`)
                    // return `HTTP Error ${response.status}`
                    // return { error: `HTTP Error! ${response.status}` }
                    throw new Error(`HTTP Error! Status: ${response.status}`)
                }
                return response.json();
            });
        } else {
            // Not logged in
            if (!this.credentials) {
                // return "Missing credentials!"
                throw new Error('Missing credentials. Set with NfriApi.setCredentials({user:\'name\',password:\'secret\'})')
            }
            // Missing endpoint
            if (!this.endPoint) {
                // return "Missing endpoint!"
                throw new Error('Missing endpoint. Set with NfriApi.setEndpoint({url:\'https://example.com:5000/api/v1/search\'})')
            }
            throw new Error('Not sure what went wrong here?')
        }
    }
}
