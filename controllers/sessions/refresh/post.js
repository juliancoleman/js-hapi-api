const Service = appRequire("lib/authentication/service");
const Validator = appRequire("lib/sessions/refresh/validator");

const { respondCustomError } = appRequire("helpers/responses");

const post = ({ payload }, reply) => {
  const { token } = payload;

  Service.refreshToken(token)
    .then((refreshedToken) => {
      if (!refreshedToken) {
        return reply.unauthorized("Invalid JWT provided; please reauthenticate");
      }

      return reply({ token: refreshedToken });
    })
    .catch(respondCustomError(reply));
};

module.exports = {
  method: "POST",
  path: "/api/v1/sessions/refresh",
  handler: post,
  config: {
    auth: false,
    validate: {
      payload: Validator,
    },
  },
};
