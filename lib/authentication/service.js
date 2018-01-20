const Promise = require("bluebird");
const jwt = Promise.promisifyAll(require("jsonwebtoken"));

const User = appRequire("models/user");
const InvalidEmailPasswordError = appRequire("lib/users/errors/invalid_email_password_error");

const algorithm = "HS256";
const expiresIn = "7d";

const signToken = ({ id: accountId }) => jwt.sign(
  { accountId },
  process.env.JWT_KEY,
  { algorithm, expiresIn } // eslint-disable-line
);

const refreshToken = async (token) => {
  const decodedToken = await jwt.verifyAsync(token, process.env.JWT_KEY);

  if (!decodedToken) { return null; }

  const { accountId: id } = decodedToken;
  const user = await User.query().where({ id });

  if (!user) { return null; }

  return signToken(user);
};

const validateToken = (request, { accountId }, callback) => {
  const error = undefined;
  const id = accountId;

  User
    .query()
    .where({ id })
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

const validateCredentials = async ({ email_address, password }) => {
  const user = await User.query().where({ email_address });

  if (!user) {
    throw new InvalidEmailPasswordError();
  }

  return user
    .verifyPassword(password)
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
