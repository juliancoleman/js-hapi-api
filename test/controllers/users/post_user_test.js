const R = require("ramda");

const UserService = appRequire("lib/users/service");

const makeRequest = payload => testApp.inject({
  method: "POST",
  url: "/api/v1/users",
  payload,
});

const validPayload = {
  email_address: "julcol03@gmail.com",
  password: "12345678",
  confirm_password: "12345678",
};

describe("POST /api/v1/users", () => {
  context("A valid payload", () => {
    it("should return code 201", function* () {
      const response = yield makeRequest(validPayload);

      expect(response.statusCode).to.equal(201);
    });
  });

  context("An invalid payload", () => {
    it("should return an error code 400", function* () {
      const payload = R.merge(validPayload, { email_address: "not a valid email address" });
      const response = yield makeRequest(payload);

      expect(response.statusCode).to.equal(400);
    });
  });
});
