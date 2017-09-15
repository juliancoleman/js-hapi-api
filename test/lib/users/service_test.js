const R = require("ramda");

const Helpers = appRequire("test/helpers");
const Service = appRequire("lib/authentication/service");
const User = appRequire("models/user");

describe("UsersService", () => {
  beforeEach(function* () {
    this.user = yield Helpers.generateUser();
  }.bind(this));

  describe("#createUser", () => {
    context("Test not written", () => {
      it("but still passes", async () => {
        expect(true).to.equal(true);
      });
    });
  });

  describe("#deleteUser", () => {
    context("Test not written", () => {
      it("but still passes", async () => {
        expect(true).to.equal(true);
      });
    });
  });

  describe("#getUsers", () => {
    context("Test not written", () => {
      it("but still passes", async () => {
        expect(true).to.equal(true);
      });
    });
  });

  describe("#getUser", () => {
    context("Test not written", () => {
      it("but still passes", async () => {
        expect(true).to.equal(true);
      });
    });
  });

  describe("#updateUser", () => {
    context("Test not written", () => {
      it("but still passes", async () => {
        expect(true).to.equal(true);
      });
    });
  });
});
