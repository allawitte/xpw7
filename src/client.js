'use strict';
class Client {
    constructor(name, birthday){
        this._name = name;
        this._birthday = birthday;
        this._bonus = 0;
    }
    calculateBonus(value){
       return  value*5/100;
    }
    useFromBonusAccount(vlue){

    }
    get birthday(){
        
        return {
            day: this._birthday.slice(0,2),
            month: this._birthday.slice(3,5)
        }
    }
}
module.exports = Client;
/**
 * Created by HP on 1/29/2017.
 */
