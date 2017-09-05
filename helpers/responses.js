const respondCustomError = reply =>
  error => reply.boom(error.code, error, error.message);

module.exports = { respondCustomError };
