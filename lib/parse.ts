import { ParseData } from './parseData';

class Parse implements ParseData {
    firstName: String;
    lastName: String;
    clientId: String;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.clientId = '';
    }

    v1Parse(value: String) {
        let splitVal = value.split('0');
        let temp = 'firstName';   

        splitVal.forEach((val) => {
            if (val != '') {
                if (!this.firstName) {                    
                    this.firstName = val;
                } else if (!this.lastName) {
                    //add an extra 0, to accomodate delimiter
                    this.firstName += '0';
                    this.lastName = val;
                    temp = 'lastName';
                } else {
                    //add an extra 0, to accomodate delimiter
                    this.lastName += '0';
                    this.clientId = val;
                    temp = 'clientId';
                }
            } else if (val == '') {
                if (temp == 'firstName') {
                    this.firstName += '0';
                } else if (temp == 'lastName') {
                    this.lastName += '0';
                } else {
                    this.clientId += '0';
                }
            }
        });
        return this;
    }

    v2Parse(value: String) {
        let splitVal = value.split(/[0]+/);
        this.firstName = splitVal[0];
        this.lastName = splitVal[1];
        //to format the client id with hyphen
        this.clientId = splitVal[2].replace(/(\d{3})(\d{3})/, "$1-$2");

        return this;
    }
}

export { Parse };