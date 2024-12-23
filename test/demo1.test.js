const { expect } = require("chai");
// mocha -t 5000
describe("zftest", function () {
  it("#1", function () {
    expect(1 + 1).to.be.equal(2);
  });
  it("#2", function (done) {
    setTimeout(function () {
      expect(1 + 1).to.be.equal(2);
      done();
    }, 1000);
  });
  it("#3", function () {
    return new Promise(function (resolve) {
      setTimeout(function () {
        expect(1 + 1).to.be.equal(2);
        resolve();
      }, 1000);
    });
  });
});
