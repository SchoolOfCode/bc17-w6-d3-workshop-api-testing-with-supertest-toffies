import { test, expect } from "vitest"
import request from "supertest";
import app from "../app.js";

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
