const Service = appRequire("lib/users/service");
const Validator = appRequire("lib/users/delete/validator");

const { respondCustomError } = appRequire("helpers/responses");
const UserNotFoundError = appRequire("lib/users/errors/user_not_found_error");

const destroy = ({ params }, reply) => {
  const { userId } = params;

  Service.deleteUser(userId)
    .then(() => reply().code(204))
    .catch(UserNotFoundError, respondCustomError(reply));
};

module.exports = {
  method: "DELETE",
  path: "/api/v1/users/{userId}",
  handler: destroy,
  config: {
    validate: {
      params: Validator,
    },
  },
};
