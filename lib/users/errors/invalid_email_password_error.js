const createError = appRequire("helpers/create_error");

module.exports = createError(
  "InvalidEmailPasswordError",
  "Invalid email or password; please try again",
  403 // eslint-disable-line
);
