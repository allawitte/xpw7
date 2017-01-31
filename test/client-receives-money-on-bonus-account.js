'use strict';
var expect = require('chai').expect;
var createOrder = require('../src/createOrder');
describe('When client orders makes order - he gets money on his bonus account', function () {
    var order = {};
    var pizzeria = {};
    var client = {};
    beforeEach(function () {
        order = new createOrder();
        pizzeria = order.createPizzeria();
        client = order.createClient('Marcel', '19.10.1976');
    });
    describe('I do an order', function () {

        var ordersCases = [
            {madeOrder: 200, gottenBonus: 10},
            {madeOrder: 300, gottenBonus: 15},
            {madeOrder: 400, gottenBonus: 20},
            {madeOrder: 500, gottenBonus: 25},
            {madeOrder: 600, gottenBonus: 30}
        ];

        ordersCases.forEach(item => {
            it('Pizzeria gives me a bonus ' + item.gottenBonus + ' rub', function () {
                var iMadeOrder = item.madeOrder;
                var receivedBonus = client.calculateBonus(iMadeOrder);
                expect(receivedBonus).is.equal(item.gottenBonus);
            });

        });
    });
});
/**
 * Created by HP on 1/30/2017.
 */
