const util = require("util");
const R = require("ramda");

const ignoredBookshelfMessages = ["EmptyResponse", "No Rows Updated", "No Rows Deleted"];

const getBaseError = (defaultMessage, code) =>
  function (message = "") {
    const isOIgnoredMessage = R.contains(message, ignoredBookshelfMessages);

    this.message = defaultMessage;

    if (message && !isOIgnoredMessage) {
      this.message = message;
    }

    this.code = code;
  };

module.exports = (errorName, defaultMessage, code) => {
  const error = getBaseError(defaultMessage, code);

  util.inherits(error, Error);
  error.prototype.name = errorName;

  return error;
};
