// const app = require("../src/app");
const app = require("../src/app");
const request = require("supertest");
describe("app", function () {
  it("promise 200", () => {
    return request(app).get("/").expect(200);
  });

  it("callback 200", (done) => {
    request(app).get("/").expect(200, done);
  });

  it("done 200", (done) => {
    request(app).get("/").expect(200).end(done);
  });

  it("await 200", async () => {
    await request(app).get("/").expect(200);
  });
});
