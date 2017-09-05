const bcrypt = require("bcrypt");
const Promise = require("bluebird");

const BaseModel = require("./base");

const Bookshelf = appRequire("config/bookshelf");
const UserNotFoundError = appRequire("lib/users/errors/user_not_found_error");

module.exports = Bookshelf.model("User", BaseModel.extend({
  hidden: ["encryptedPassword"],
  tableName: "user",
  customError: UserNotFoundError,

  initialize(...args) {
    this.on("creating", this.hashPassword, this);

    return BaseModel.prototype.initialize.apply(this, args);
  },

  hashPassword: model => new Promise((resolve, reject) => {
    bcrypt.hash(model.attributes.password, 12, (err, hash) => {
      if (err) { reject(err); }

      model.unset("password");
      model.set("encryptedPassword", hash);

      resolve(hash);
    });
  }),

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
