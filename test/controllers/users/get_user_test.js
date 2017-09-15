const R = require("ramda");

const UserService = appRequire("lib/users/service");

const getUserRequest = payload => testApp.inject({
  method: "GET",
  url: "/api/v1/users/{userId}",
  payload,
});

const getUsersRequest = payload => testApp.inject({
  method: "GET",
  url: "/api/v1/users",
  payload,
});

describe("GET /api/v1/users", () => {
  context("Test not written", () => {
    it("but still passes", async () => {
      expect(true).to.equal(true);
    });
  });
});
