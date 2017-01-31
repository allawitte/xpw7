'use strict';
class Client {
    constructor(name, birthday){
        this._name = name;
        this._birthday = birthday;
        this._bonus = 0;
    }
    addToBonusAccount(value){
        this._bonus += value;
    }
    useFromBonusAccount(vlue){

    }
    get birthday(){
        return {
            day: this._birthday.slice(0,3),
            month: this._birthday.slice(4,6)
        }
    }
}
module.exports = Client;
/**
 * Created by HP on 1/29/2017.
 */
