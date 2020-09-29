const assert = require("assert");
const request = require("supertest");
const app = require("../app");

describe("The express app", () => {
  it("Handles a GET request to /api", () => {
    request(app)
      .get("/api")
      .end((err, response) => {
        const { hi } = response.body;
        assert(hi === "there");
      });
  });
});
