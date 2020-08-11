"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parse = void 0;
var Parse = /** @class */ (function () {
    function Parse() {
        this.firstName = '';
        this.lastName = '';
        this.clientId = '';
    }
    Parse.prototype.v1Parse = function (value) {
        var _this = this;
        var splitVal = value.split('0');
        var temp = 'firstName';
        splitVal.forEach(function (val) {
            if (val != '') {
                if (!_this.firstName) {
                    _this.firstName = val;
                }
                else if (!_this.lastName) {
                    //add an extra 0, to accomodate delimiter
                    _this.firstName += '0';
                    _this.lastName = val;
                    temp = 'lastName';
                }
                else {
                    //add an extra 0, to accomodate delimiter
                    _this.lastName += '0';
                    _this.clientId = val;
                    temp = 'clientId';
                }
            }
            else if (val == '') {
                if (temp == 'firstName') {
                    _this.firstName += '0';
                }
                else if (temp == 'lastName') {
                    _this.lastName += '0';
                }
                else {
                    _this.clientId += '0';
                }
            }
        });
        return this;
    };
    Parse.prototype.v2Parse = function (value) {
        var splitVal = value.split(/[0]+/);
        this.firstName = splitVal[0];
        this.lastName = splitVal[1];
        //to format the client id with hyphen
        this.clientId = splitVal[2].replace(/(\d{3})(\d{3})/, "$1-$2");
        return this;
    };
    return Parse;
}());
exports.Parse = Parse;
