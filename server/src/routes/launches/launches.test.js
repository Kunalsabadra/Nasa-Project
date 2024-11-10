const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should response with 200 Success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
    // expect(response.statusCode).toBe(200);
  });
});

describe("Test POST /launches", () => {
  const completeLaunchData = {
    mission: "USS-IND",
    rocket: "NCC 1701-DD",
    target: "Kepler-186-th",
    launchDate: "July 21 2025",
  };

  const launchDatawithoutDate = {
    mission: "USS-IND",
    rocket: "NCC 1701-DD",
    target: "Kepler-186-th",
  };

  test("It should response with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData);
    expect(response.body).toMatchObject(launchDatawithoutDate);
  });
  test("It should catch missing required properties", async() => {
    const response = await request(app)
    .post('/launches')
    .send(launchDatawithoutDate)
    .expect('Content-type' , /json/)

    expect(response.body).toStrictEqual({
       error: "Required fields are missing"
    })

  });
  test("It should catch invalid dates", () => {});
});
