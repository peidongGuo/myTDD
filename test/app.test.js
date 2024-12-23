const app = require("../src/app");
// const app = require("../src/app");
const request = require("supertest");
describe("app", function () {
  it("/", function (done) {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .end(done);
  });
});
