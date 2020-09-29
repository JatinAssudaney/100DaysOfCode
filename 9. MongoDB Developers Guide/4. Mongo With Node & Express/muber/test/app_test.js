const assert = require("assert");
const request = require("supertest");
const app = require("../app");

describe("The express app", () => {
  it("Handles a GET request to /api", async () => {
    request(app)
      .get("/api")
      .end((err, response) => {
        console.log(response);
      });
  });
});
