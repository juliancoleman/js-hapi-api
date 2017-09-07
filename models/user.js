const BaseModel = require("./base");

const Bookshelf = appRequire("config/bookshelf");
const UserNotFoundError = appRequire("lib/users/errors/user_not_found_error");

module.exports = Bookshelf.model("User", BaseModel.extend({
  bcrypt: { field: "password" },
  tableName: "users",
  customError: UserNotFoundError,

  // authorize(user) {
  //   const accessibleBananaIds = Bookshelf.knex
  //     .select("id")
  //     .from("")
  //     .innerJoin("", "")
  //     .innerJoin("user", "")
  //     .where("user.id", user.get("id"));
  //     // deleted_at checks needed as well

  //   return this.query((qb) => {
  //     qb.where(this.attributes);
  //     qb.andWhere("id", "IN", accessibleBananaIds);
  //   });
  // },
}));
