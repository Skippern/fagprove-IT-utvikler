"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function NfriApi() {
    this.creddentials = null;
    this.endPoint = null;
    this.headers = new Headers();
    this.setCredentials = function (myCredentials) {
        this.credentials = myCredentials;
        this.headers.append('Authorization', 'Basic ' + btoa("".concat(this.credentials.user, ":").concat(this.credentials.password)));
    };
    this.setEndpoint = function (myEndPoint) {
        this.endPoint = myEndPoint;
    };
    this.getAsteroids = function (tidStart, tidSlutt) {
        if (this.credentials && this.endPoint) {
            var myUrl = this.endPoint.url + '?from=' + tidStart.toString() + '&to=' + tidSlutt.toString();
            fetch(myUrl, {
                method: 'GET',
                headers: this.headers,
            })
                .then(function (response) {
                if (!response.ok) {
                    return "HTTP Error";
                    return { error: "HTTP Error! ".concat(response.status) };
                    // throw new Error(`HTTP Error! Status: ${response.status}`)
                }
                return response.json();
            });
        }
        else {
            // Not logged in
            if (!this.credentials) {
                return "Missing credentials!";
                throw new Error('Missing credentials. Set with NfriApi.setCredentials({user:\'name\',password:\'secret\'})');
            }
            // Missing endpoint
            if (!this.endPoint) {
                return "Missing endpoint!";
                throw new Error('Missing endpoint. Set with NfriApi.setEndpoint({url:\'https://example.com:5000/api/v1/search\'})');
            }
        }
    };
}
exports.default = NfriApi;
