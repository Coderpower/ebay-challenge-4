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

        var driver = require('./data/scenario-1/driver.json');
        var customers = require('./data/scenario-1/customers.json');
        var expectations = [
            "07479caa-9a45-4eeb-8717-a5107cec2b71",
            "777e1c4d-e695-423e-ac46-751ef7083e8c"
        ];

        expect(prepareDelivery(driver, customers)).to.eql(expectations);
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

        var driver = require('./data/scenario-2/driver.json');
        var customers = require('./data/scenario-2/customers.json')
        var expectations = [
            "bc488845-8f9d-42fa-a0ba-2fff7971fc76",
            "62bedee5-8ac3-4431-ac16-1ca158791aa1"
        ]

        expect(prepareDelivery(driver, customers)).to.eql(expectations);
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

        var driver = require('./data/scenario-3/driver.json');
        var customers = require('./data/scenario-3/customers.json')
        var expectations = [
            "a37d22e6-8883-43ac-bf92-c97e774e11ec",
            "27e39825-c2f1-4e80-a3a4-148abec98dde",
            "78fa4f3a-c041-4884-8892-617eb9cc6e06"
        ]

        expect(prepareDelivery(driver, customers)).to.eql(expectations);
    });

});
