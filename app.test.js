const request = require("supertest");
const app = require("./index");


beforeAll((done) => {
    server = app.listen(4000, done);
  // Any setup if needed before tests run
});

afterAll((done) => {
    server.close(done);
  // Any cleanup if needed after tests run
});

describe("GET /", () => {
  it("should return a greeting message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello, CI/CD Students!");
  });
});


