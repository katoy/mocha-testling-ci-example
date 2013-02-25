assert = require("assert")
app = require("../src/app")

describe "integers", ->
  it "should square the numbers", (done) ->
    assert.equal app.add(2), 4
    assert.equal app.add(3), 9
    done()


