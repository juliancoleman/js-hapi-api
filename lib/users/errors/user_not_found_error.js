const createError = appRequire("helpers/create_error");

module.exports = createError(
  "UserNotFoundError",
  "User not found",
  404 // eslint-disable-line
);
