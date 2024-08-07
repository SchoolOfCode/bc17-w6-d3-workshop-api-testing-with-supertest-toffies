import { test, expect } from "vitest"
import request from "supertest";
import app from "../app.js";
import { resetUsersTable } from "../db/helpers.js";
import { seedData } from "../db/seed-data.js";

// test.skip("GET /api/health works", () => {
// });

// Goal: make a GET request with Supertest to the /api/health
 test("GET /api/health works", async () => {
  const response = await request(app).get("/api/health");
  expect(response.headers["content-type"]).toMatch(/json/);
  // assert the response body is correct
    expect(response.body).toEqual({
        success: true,
        payload: "API is running correctly",
    });
    // assert the response status code is correct
    expect(response.statusCode).toBe(200);
 });

 test("GET /api/users", async () => {
    await resetUsersTable(seedData);
    const response = await request(app).get("/api/users");
    expect(response.body).toEqual(expect.any(Object)); //assert that the response body is an object
    expect(response.body.success).toBe(true);//assert that response body.success is true
    expect(Array.isArray(response.body.payload)).toBe(true); //assert that response body.payload is an array
 });

// then within the test:
//    ARRANGE:
//      use the `resetUsersTable` function to reset the database table to a known state
//    ACT:
//      use Supertest to send a GET request to the `/api/users` endpoint
//      wait for the response
//    ASSERT:
//      
//      
//      loop over the payload array. for each user object in the payload array:
//          assert that user object.id is a number
//          assert that user object.username is a string
//      assert that the response status code is 200
//      assert that there's a Content-Type response header which contains `application/json`
//      any other assertions that you think would be useful
// run tests to ensure they passes
// temporarily break the implementation in `users/users.controller.js` to ensure test fails and then change back so that tests pass