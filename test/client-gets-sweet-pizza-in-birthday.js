'use strict';
var expect = require('chai').expect;
var createOrder = require('../src/createOrder');
describe('When client has birthday he gets sweet pizza', function () {
    var order = {};
    var pizzeria = {};
    var client = {};
    beforeEach(function () {
        order = new createOrder();
        pizzeria = order.createPizzeria();
        client = order.createClient('Marcel', '19.10.1976');
    });
    describe('I have birthday', function () {
        it('Pizzeria gives me Cherry-Sweet', function () {
            var currentDay = order.getDay({
                day: 19,
                month: 10
            });
            var clientBirthday = client.birthday;
            var present = "Cherry-Sweet";

            expect(present).is.equal(pizzeria.isBirthday(clientBirthday, currentDay));
        })
    });
    describe('I have no birthday', function () {
        it('Pizzeria gives me no present', function () {
            var currentDay = order.getDay({
                day: 17,
                month: 10
            });
            var clientBirthday = client.birthday;
            var present = false;

            expect(present).is.equal(pizzeria.isBirthday(clientBirthday, currentDay));
        })
    })
});
/**
 * Created by HP on 1/30/2017.
 */
