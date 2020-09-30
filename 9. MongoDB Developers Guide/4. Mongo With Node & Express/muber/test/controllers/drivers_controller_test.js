const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../../app");
const Driver = mongoose.model("driver");

describe("Drivers Controller", () => {
  it("POST to /api/drivers creates a new driver", async () => {
    const count = await Driver.countDocuments();
    await request(app).post("/api/drivers").send({ email: "test@test.com" });
    const newCount = await Driver.countDocuments();
    assert(count + 1 === newCount);
  });

  it("PUT to /api/drivers/:id edits an existing driver", async () => {
    const driver = await new Driver({
      email: "t@t.com",
      driving: false,
    }).save();
    await request(app)
      .put(`/api/drivers/${driver._id}`)
      .send({ driving: true });
    const existingDriver = await Driver.findOne({ email: "t@t.com" });
    assert(existingDriver.driving);
  });

  it("DELETING to /api/drivers/:id deletes an existing driver", async () => {
    const driver = await new Driver({
      email: "t@t.com",
    }).save();
    await request(app).delete(`/api/drivers/${driver._id}`);
    const existingDriver = await Driver.findOne({ email: "t@t.com" });
    assert(!existingDriver);
  });
});
