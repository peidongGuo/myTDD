const { app, mock, assert } = require("egg-mock/bootstrap");
describe("test/controller/home.test.js", function () {
  describe("GET /", () => {
    it("should 200 and get body", () => {
      return app.httpRequest().get("/").expect(200).expect("hello");
    });

    it("should 200 and get reqeust body", () => {
      app.mockCsrf();
      return app
        .httpRequest()
        .post("/post")
        .type("form")
        .send({ name: "zfpx" })
        .expect(200)
        .expect({ name: "zfpx" });
    });
  });
});
