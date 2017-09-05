const Service = appRequire("lib/users/service");
const Validator = appRequire("lib/users/put/validator");

const { respondCustomError } = appRequire("helpers/responses");

const UserNotFoundError = appRequire("lib/users/errors/user_not_found_error");

const put = ({ payload, params }, reply) => {
  const { userId } = params;

  Service.updateUser(userId, payload)
    .then(reply)
    .catch(UserNotFoundError, respondCustomError(reply));
};

module.exports = {
  method: "PUT",
  path: "/api/v1/users/{userId}",
  handler: put,
  config: {
    validate: {
      payload: Validator,
    },
  },
};
