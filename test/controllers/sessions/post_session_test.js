const R = require("ramda");

const UserService = appRequire("lib/authentication/service");

const makeRequest = payload => testApp.inject({
  method: "POST",
  url: "/api/v1/sessions",
  payload,
});

describe("POST /api/v1/sessions", () => {
  context("Test not written", () => {
    it("but still passes", async () => {
      expect(true).to.equal(true);
    });
  });
});
