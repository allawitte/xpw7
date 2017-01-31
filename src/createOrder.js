'use strict';
var Client = require('./client');
var Pizzeria = require('./pizzeria');
class createOrder {
    cretePizzeria(){
        return new Pizzeria();
    }
    createClient(name, birthday){
        return new Client(name, birthday);
    }
    getDay(date){
        return {
            day: date.day,
            month: date.month
        }
    }

    getTime(time){
        return {
            hour: time.hour,
            minutes: time.minutes
        }
    }
}
/**
 * Created by HP on 1/30/2017.
 */
