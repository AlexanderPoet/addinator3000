const add = require('./adder.js');

const Tests = {
    runTest: function(testName) {
        const result = this[testName]();
        console.log(result, testName);
    },
    runTests: function() {
        Object.getOwnPropertyNames(this)
        .filter((prop) => this[prop] instanceof Function)
        .filter((prop) => prop.indexOf('test') !== -1)
        .forEach((prop) => this.runTest(prop));
    },
    assertEquals: function(a,b) {
        return (a===b);
    },
    testAddPositiveNumbers: function() {
        return this.assertEquals(add(5,7),12)
    },
    testAddNegativeNumbers: function() {
        return this.assertEquals(add(-5,-7),-12);
    },
    testAddNegativeAndPositiveNumbers: function() {
        return this.assertEquals(add(-5,7),2);
    },
};

Tests.runTests();
