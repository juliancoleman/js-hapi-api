const Password = require("objection-password")();
const Base = require("./base");

const { QueryBuilder } = appRequire("config/objection");

module.exports = class User extends Password(Base) {
  static get tableName() {
    return "users";
  }

  static get QueryBuilder() {
    return class extends QueryBuilder {
      authorize(user) {
        const getAccessibleBananaIds = builder => builder
          .select("id")
          .from("")
          .innerJoin("", "")
          .innerJoin("user", "")
          .where("user.id", user.get("id"));
          // deleted_at checks needed as well

        return this.query()
          .where("id", "IN", getAccessibleBananaIds);
      }
    };
  }
};
