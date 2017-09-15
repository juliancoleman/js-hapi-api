const R = require("ramda");

const UserService = appRequire("lib/users/service");

const makeRequest = payload => testApp.inject({
  method: "PUT",
  url: "/api/v1/users/{userId}",
  payload,
});

describe("PUT /api/v1/users", () => {
  context("Test not written", () => {
    it("but still passes", async () => {
      expect(true).to.equal(true);
    });
  });
});
