const R = require("ramda");
const Promise = require("bluebird");
const UserAlreadyExistsError = require("./errors/user_already_exists_error");

const objection = appRequire("config/objection");
const AuthService = appRequire("lib/authentication/service");

const User = appRequire("models/user");
const knex = User.knex();

const createUser = Promise.method(async (attributes) => {
  const { email_address } = attributes;
  const existingUser = await User
    .query()
    .first()
    .where({ email_address });

  if (existingUser) {
    throw new UserAlreadyExistsError("Email already taken");
  }

  return objection.transaction(knex, async (trx) => {
    const user = await User
      .query(trx)
      .insert(attributes);

    user.token = AuthService.signToken(user);

    return user;
  });
});

const deleteUser = userId => User.query().delete().where({ id: userId });

const getUsers = ({ pageSize, page, sort }) => {
  //  TODO: re-implement sorting
  // User.query((qb) => {
  //   addOrderByQuery(qb, sort);
  // })
  // .fetchPage({ pageSize, page })
  // .then(({ models, pagination }) => ({ users: models, paginationData: pagination }));

  return User
    .query()
    .page(page, pageSize)
    .then(result => ({ users: result.results, paginationData: R.dissoc("results", result) }));
};

const getUser = id => User.query().where({ id });

const updateUser = (id, attributes) => User
  .query()
  .patchAndFetchById(id, attributes);

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
};
