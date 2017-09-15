const R = require("ramda");

const Helpers = appRequire("test/helpers");
const Service = appRequire("lib/authentication/service");
const User = appRequire("models/user");

describe("AuthenticationService", () => {
  beforeEach(function* () {
    this.user = yield Helpers.generateUser();
  }.bind(this));

  describe("#signToken", () => {
    context("Test not written", () => {
      it("but still passes", async () => {
        expect(true).to.equal(true);
      });
    });
  });

  describe("#refreshToken", () => {
    context("Test not written", () => {
      it("but still passes", async () => {
        expect(true).to.equal(true);
      });
    });
  });

  describe("#validateToken", () => {
    context("Test not written", () => {
      it("but still passes", async () => {
        expect(true).to.equal(true);
      });
    });
  });

  describe("#validateCredentials", () => {
    context("Test not written", () => {
      it("but still passes", async () => {
        expect(true).to.equal(true);
      });
    });
  });
});
