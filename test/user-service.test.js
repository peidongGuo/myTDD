const { app, assert } = require("egg-mock/bootstrap");
describe("get name", () => {
  it("create user", async () => {
    const ctx = app.mockContext();
    const doc = await ctx.service.user.create({
      username: "zfpx",
      password: "123456",
      email: "1@qq.com",
    });
    assert(doc);
    assert(doc.username == "zfpx");
  });
  it("get user", async () => {
    const ctx = app.mockContext();
    const doc = await ctx.service.user.get("zfpx");
    assert(doc);
    assert(doc.username == "zfpx");
  });
});
