"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function NfriApi() {
    this.creddentials = null;
    this.endPoint = null;
    this.headers = new Headers();
    this.setCredentials = function (myCredentials) {
        this.credentials = myCredentials;
        this.headers.append('Authorization', 'Basic ' + btoa("".concat(this.credentials.user, ":").concat(this.credentials.password)));
        // this.headers.append('Authorization', 'Basic ' + `${this.credentials.user}:${this.credentials.password}`);
    };
    this.setEndpoint = function (myEndPoint) {
        this.endPoint = myEndPoint;
    };
    this.getAsteroids = function (tidStart, tidSlutt) {
        var _this = this;
        console.log('Look to the stars!');
        if (this.credentials && this.endPoint) {
            var myUrl = (this.endPoint.url + '?from=' + tidStart.toString() + '&to=' + tidSlutt.toString());
            fetch(myUrl, {
                method: 'GET',
                headers: this.headers,
            })
                .then(function (response) {
                if (!response.ok) {
                    _this.console.log("HTTP Error ".concat(response.status));
                    // return `HTTP Error ${response.status}`
                    // return { error: `HTTP Error! ${response.status}` }
                    throw new Error("HTTP Error! Status: ".concat(response.status));
                }
                return response.json();
            });
        }
        else {
            // Not logged in
            if (!this.credentials) {
                // return "Missing credentials!"
                throw new Error('Missing credentials. Set with NfriApi.setCredentials({user:\'name\',password:\'secret\'})');
            }
            // Missing endpoint
            if (!this.endPoint) {
                // return "Missing endpoint!"
                throw new Error('Missing endpoint. Set with NfriApi.setEndpoint({url:\'https://example.com:5000/api/v1/search\'})');
            }
            throw new Error('Not sure what went wrong here?');
        }
    };
}
exports.default = NfriApi;
