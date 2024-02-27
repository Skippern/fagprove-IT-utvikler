
interface Credentials {
    user: string;
    password: string;
}
interface EndPoint {
    url: string;
    // port: number | null;
}


class NfriApi {
    private static credentials: Credentials | null = null;
    private static endPoint: EndPoint | null = null;
    private static headers = new Headers();
    static setCredentials(myCredentials: Credentials): void {
        // test credentials, give error
        this.credentials = myCredentials
        this.headers.append('Authorization', 'Basic ' + btoa(`${this.credentials.user}:${this.credentials.password}`))
    }
    static setEndpoint(myEndPoint: EndPoint): void {
        this.endPoint = myEndPoint
    }
    static getAstroids(tidStart:number,tidSlutt:number): any {
        if (this.credentials && this.endPoint) {
            fetch(this.endPoint.url, {
                method: 'GET',
                headers: NfriApi.headers,
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`)
                }
                return response.json();
            })
            // Do something
        } else {
            // Not logged in
            if (!this.credentials) {
                throw new Error('Missing credentials. Set with NfriApi.setCredentials({user:\'name\',password:\'secret\'})')
            }
            // Missing endpoint
            if (!this.endPoint) {
                throw new Error('Missing endpoint. Set with NfriApi.setEndpoint({url:\'https://example.com/api/v1/search\'})')
            }
        }
        return
    }
    // return
}

export default NfriApi;