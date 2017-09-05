const Service = appRequire("lib/authentication/service");
const Validator = appRequire("lib/sessions/post/validator");

const { respondCustomError } = appRequire("helpers/responses");
const InvalidEmailPasswordError = appRequire("lib/users/errors/invalid_email_password_error");
const UserNotFoundError = appRequire("lib/users/errors/user_not_found_error");

const post = ({ payload }, reply) => {
  Service.validateCredentials(payload)
    .then(user => reply({ token: Service.signToken(user), user }))
    .catch(
      UserNotFoundError,
      InvalidEmailPasswordError,
      respondCustomError(reply) // eslint-disable-line
    );
};

module.exports = {
  method: "POST",
  path: "/api/v1/sessions",
  handler: post,
  config: {
    auth: false,
    validate: {
      payload: Validator,
    },
  },
};
