const Promise = require("bluebird");
const jwt = Promise.promisifyAll(require("jsonwebtoken"));
const bcrypt = Promise.promisifyAll(require("bcrypt"));

const User = appRequire("models/user");
const InvalidEmailPasswordError = appRequire("lib/users/errors/invalid_email_password_error");

const algorithm = "HS256";
const expiresIn = "7d";

const signToken = user => jwt.sign(
  { accountId: user.get("id") },
  process.env.JWT_KEY,
  { algorithm, expiresIn } // eslint-disable-line
);

const refreshToken = async (token) => {
  const decodedToken = await jwt.verifyAsync(token, process.env.JWT_KEY);

  if (!decodedToken) { return null; }

  const { accountId: id } = decodedToken;
  const user = await User.forge({ id }).fetch();

  if (!user) { return null; }

  return signToken(user);
};

const validateToken = (request, { accountId }, callback) => {
  const error = undefined;
  const id = accountId;

  User
    .forge({ id })
    .fetch()
    .then((user) => {
      if (!user) {
        return callback(error, false, user);
      }

      request.user = user; // eslint-disable-lint

      return callback(error, true, user);
    })
    .catch((err) => {
      console.error(err.stack);
      callback(err, false, error);
    });
};

const validateCredentials = async ({ email_address: emailAddress, password }) => {
  const user = await User.forge({ emailAddress }).fetch();

  if (!user) {
    throw new InvalidEmailPasswordError();
  }

  return bcrypt.compareAsync(
    password,
    user.get("encryptedPassword") // eslint-disable-line
  )
  .then((isValid) => {
    if (!isValid) {
      throw new InvalidEmailPasswordError();
    }

    return user;
  });
};

module.exports = {
  algorithm,
  signToken,
  refreshToken,
  validateToken,
  validateCredentials,
};
