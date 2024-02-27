"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NfriApi = /** @class */ (function () {
    function NfriApi() {
    }
    NfriApi.setCredentials = function (myCredentials) {
        // test credentials, give error
        this.credentials = myCredentials;
        this.headers.append('Authorization', 'Basic ' + btoa("".concat(this.credentials.user, ":").concat(this.credentials.password)));
    };
    NfriApi.setEndpoint = function (myEndPoint) {
        this.endPoint = myEndPoint;
    };
    NfriApi.getAstroids = function (tidStart, tidSlutt) {
        if (this.credentials && this.endPoint) {
            fetch(this.endPoint.url, {
                method: 'GET',
                headers: NfriApi.headers,
            })
                .then(function (response) {
                if (!response.ok) {
                    throw new Error("HTTP Error! Status: ".concat(response.status));
                }
                return response.json();
            });
            // Do something
        }
        else {
            // Not logged in
            if (!this.credentials) {
                throw new Error('Missing credentials. Set with NfriApi.setCredentials({user:\'name\',password:\'secret\'})');
            }
            // Missing endpoint
            if (!this.endPoint) {
                throw new Error('Missing endpoint. Set with NfriApi.setEndpoint({url:\'https://example.com/api/v1/search\'})');
            }
        }
        return;
    };
    NfriApi.credentials = null;
    NfriApi.endPoint = null;
    NfriApi.headers = new Headers();
    return NfriApi;
}());
exports.default = NfriApi;
