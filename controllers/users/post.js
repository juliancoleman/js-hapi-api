const Service = appRequire("lib/users/service");
const Validator = appRequire("lib/users/post/validator");

const { respondCustomError } = appRequire("helpers/responses");

const UserAlreadyExistsError = appRequire("lib/users/errors/user_already_exists_error");

const post = ({ payload }, reply) => {
  Service.createUser(payload)
    .then(response => reply(response.toJSON()).code(201))
    .catch(UserAlreadyExistsError, respondCustomError(reply));
};

module.exports = {
  method: "POST",
  path: "/api/v1/users",
  handler: post,
  config: {
    auth: false,
    validate: {
      payload: Validator,
    },
  },
};
