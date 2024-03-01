"use strict";
// import { headers } from "next/headers";
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
        // console.log('Look to the stars!')
        // console.log('User: ',this.credentials.user)
        // console.log('Passwd: ',this.credentials.password)
        // console.log(this.headers)
        if (this.credentials && this.endPoint) {
            var myUrl = (this.endPoint.url + '?from=' + tidStart.toString() + '&to=' + tidSlutt.toString());
            fetch(myUrl, {
                method: 'GET',
                headers: this.headers,
            })
                .then(function (response) {
                if (!response.ok) {
                    throw new Error("HTTP Error! Status: ".concat(response.status));
                }
                return response.json();
            });
        }
        else {
            // Not logged in
            if (!this.credentials) {
                throw new Error('Missing credentials. Set with NfriApi.setCredentials({user:\'name\',password:\'secret\'})');
            }
            // Missing endpoint
            if (!this.endPoint) {
                throw new Error('Missing endpoint. Set with NfriApi.setEndpoint({url:\'https://example.com:5000/api/v1/search\'})');
            }
            throw new Error('Not sure what went wrong here?');
        }
    };
}
exports.default = NfriApi;
