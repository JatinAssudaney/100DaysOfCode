const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../../app");
const { response } = require("../../app");
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

  it("GET to /api/drivers finds drivers near user", async () => {
    const seatlleDriver = new Driver({
      email: "seatlle@test.com",
      geometry: { type: "Point", coordinates: [-122.4759902, 47.6147628] },
    });

    const miamiDriver = new Driver({
      email: "miami@test.com",
      geometry: { type: "Point", coordinates: [-80.253, 25.791] },
    });

    await Promise.all([seatlleDriver.save(), miamiDriver.save()]);
    request(app)
      .get("/api/drivers?lng=-80&lat=25")
      .end((err, response) => {
        assert(response.body.length === 1);
        assert(response.body[0].email === "miami@test.com");
      });
  });
});
