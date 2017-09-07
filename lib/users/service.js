const UserAlreadyExistsError = require("./errors/user_already_exists_error");

const Bookshelf = appRequire("config/bookshelf");
const AuthService = appRequire("lib/authentication/service");
const addOrderByQuery = appRequire("helpers/add_order_by_query");

const User = appRequire("models/user");

const createUser = async (attributes) => {
  const { email_address } = attributes;
  const existingUser = await User
    .forge({ email_address })
    .fetch({ require: false });

  if (existingUser) {
    throw new UserAlreadyExistsError("Email already taken");
  }

  return Bookshelf.transaction(async (t) => {
    const options = { transacting: t };
    const user = await User
      .forge(attributes)
      .save(null, options);

    user.set("token", AuthService.signToken(user));

    return user;
  });
};

const deleteUser = async (userId) => { await User.forge({ id: userId }).destroy(); };

const getUsers = ({ pageSize, page, sort }) => {
  User.query((qb) => {
    addOrderByQuery(qb, sort);
  })
  .fetchPage({ pageSize, page })
  .then(({ models, pagination }) => ({ users: models, paginationData: pagination }));
};

const getUser = id => User.forge({ id }).fetch();

const updateUser = (id, attributes) => {
  User
    .forge({ id })
    .save(attributes, { patch: true })
    .then(user => getUser(user.get("id")));
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
};
