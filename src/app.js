const express = require("express");
const request = require("supertest");

const app = express();
app.get("/", function (req, res) {
  res.status(200).json({ name: "zfpx" });
});
app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});
request(app)
  .get("/user")
  .expect("Content-Type", /json/)
  .expect("Content-Length", "15")
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
  });
app.listen(9999);
module.exports = app;
