var assert = require('assert');

var app = require('../src/app.js');

describe('integers', function () {
    it('should square the numbers', function (done) {
        assert.equal(app.add(2), 4);
        assert.equal(app.add(3), 9);
        
        done();
    });
});
