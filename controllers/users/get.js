const Service = appRequire("lib/users/service");

const { singularValidator, pluralValidator } = appRequire("lib/users/get/validator");
const { respondCustomError } = appRequire("helpers/responses");

const UserNotFoundError = appRequire("lib/users/errors/user_not_found_error");

const getUser = ({ params }, reply) => {
  const { userId } = params;

  Service.getUser(userId)
    .then(reply)
    .catch(UserNotFoundError, respondCustomError(reply));
};

const getUsers = ({ query }, reply) => {
  Service.getUsers(query)
    .then(reply)
    .catch(respondCustomError(reply));
};

module.exports = [
  {
    method: "GET",
    path: "/api/v1/users",
    handler: getUsers,
    config: {
      validate: {
        query: pluralValidator,
      },
    },
  },
  {
    method: "GET",
    path: "/api/v1/users/{userId}",
    handler: getUser,
    config: {
      validate: {
        params: singularValidator,
      },
    },
  },
];
