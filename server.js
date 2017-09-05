const Promise = require("bluebird");
const R = require("ramda");
const unhandledRejection = require("unhandled-rejection");
const Hapi = Promise.promisifyAll(require("hapi"));

require("require-all")({
  dirname: `${__dirname}/models/`,
  recursive: true,
});

const { validateToken, algorithm } = appRequire("lib/authentication/service");

const server = new Hapi.Server({ debug: false });
server.connection({
  port: R.defaultTo(7000, process.env.PORT),
  routes: { cors: true },
});

module.exports = server.registerAsync([
  require("hapi-boom-decorators"),
  require("hapi-auth-jwt2"),
  require("@videoamp/hapi-route-autoloader")(`${__dirname}/controllers`),
  appRequire("config/good"),
])
.then((err) => {
  const rejectionEmitter = unhandledRejection();

  if (err) {
    console.error("Unable to load plugin. Info below:");
    console.error(err);
  }

  rejectionEmitter.on("unhandledRejection", (error) => {
    console.error(error.toString());

    if (error.stack) {
      console.error(error.stack);
    }

    throw error;
  });

  server.auth.strategy("jwt", "jwt", {
    key: process.env.JWT_KEY,
    validateFunc: validateToken,
    verifyOptions: { algorithms: [algorithm] },
  });

  server.auth.default("jwt");

  return server;
});
