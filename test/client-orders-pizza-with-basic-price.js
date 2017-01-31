'use strict';
var expect = require('chai').expect;
var Pizzeria = require('../src/pizzeria');
describe('When client orders pizza per basic price', function () {
    var pizzeria = {};
    beforeEach(function () {
        pizzeria = new Pizzeria();
    });
    describe('I order one pizza per basic price', function () {

        var ordersCases = [
            {askedItem: ['01'], givenInvoice: 200},
            {askedItem: ['02'], givenInvoice: 300},
            {askedItem: ['03'], givenInvoice: 250},
            {askedItem: ['04'], givenInvoice: 350},
            {askedItem: ['05'], givenInvoice: 350}
        ];

        ordersCases.forEach(item => {
            it('Pizzeria gives invoice ' + item.givenInvoice + ' rub', function () {
                var iOrderItem = item.askedItem;
                var receivedInvoice = pizzeria.calculateBasicPrice(iOrderItem);
                expect(receivedInvoice).is.equal(item.givenInvoice);
            });

        });

    });

    describe('I ordered few pizzas per basic price', function(){
        var ordersCases = [
            {askedItem: ['01', '02'], givenInvoice: 500},
            {askedItem: ['01','02','03'], givenInvoice: 750},
            {askedItem: ['01','02','03','04'], givenInvoice: 1100},
            {askedItem: ['01','02','03','04','05'], givenInvoice: 1450}
        ];

        ordersCases.forEach(item => {
            it('Pizzeria gives invoice ' + item.givenInvoice + ' rub', function () {
                var iOrderItem = item.askedItem;
                var receivedInvoice = pizzeria.calculateBasicPrice(iOrderItem);
                expect(receivedInvoice).is.equal(item.givenInvoice);
            });

        });
    })
});


/**
 * Created by HP on 1/30/2017.
 */
