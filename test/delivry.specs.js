var expect = require('expect.js');
var prepareDelivery = require('../sources/delivery.js');

suite('Package Delivery', function(){
    test("Validating itinary one.", function () {
        /**
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][*][0][0][0][0][0][0][0][0]
        [1][1][1][1][0][0][0][0][0][0]
        [0][0][*][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        **/

        var truck = require('./data/scenario-0/truck.json');
        var clients = require('./data/scenario-1/clients.json');
        var expectations = [
            "a7590f3c-2c56-41b6-b0ac-34f3204ab6e0",
            "a37d22e6-8883-43ac-bf92-c97e774e11ec"
        ];

        expect(prepareDelivery(clients, truck)).to.eql(expectations);
    });

    test("Validating itinary two.", function () {
        /**
        [0][0][0][0][0][1][*][0][0][0]
        [0][0][0][0][0][1][1][1][0][0]
        [0][0][0][0][0][0][*][1][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        **/

        var truck = require('./data/scenario-1/truck.json');
        var clients = require('./data/scenario-1/clients.json')
        var expectations = [
            "a7590f3c-2c56-41b6-b0ac-34f3204ab6e0",
            "a37d22e6-8883-43ac-bf92-c97e774e11ec"
        ]

        expect(prepareDelivery(clients, truck)).to.eql(expectations);
    });

    test("Validating itinary three.", function () {
        /**
        [0][1][1][0][0][0][0][0][0][0]
        [0][x][1][0][0][0][x][0][0][0]
        [0][0][1][*][0][0][0][0][0][0]
        [0][0][1][1][1][0][0][0][x][0]
        [0][0][0][*][1][*][0][0][0][0]
        [0][0][0][0][1][1][0][0][0][0]
        [0][0][0][0][0][0][0][0][0][0]
        [0][0][x][0][0][0][0][0][0][0]
        [0][0][0][0][0][0][x][0][0][0]
        [0][x][0][0][0][0][0][0][0][0]
        **/

        var truck = require('./data/scenario-1/truck.json');
        var clients = require('./data/scenario-1/clients.json')
        var expectations = [
            "a37d22e6-8883-43ac-bf92-c97e774e11ec",
            "78fa4f3a-c041-4884-8892-617eb9cc6e06",
            "78fa4f3a-c041-4884-8892-617eb9cc6e06"
        ]

        expect(prepareDelivery(clients, truck)).to.eql(expectations);
    });

});
