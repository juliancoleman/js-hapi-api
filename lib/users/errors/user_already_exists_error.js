const createError = appRequire("helpers/create_error");

module.exports = createError(
  "UesrAlreadyExistsError",
  "User already exists",
  409 // eslint-disable-line
);
