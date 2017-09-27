const R = require("ramda");
const string = require("underscore.string");

const Bookshelf = appRequire("config/bookshelf");

const BookshelfProto = Bookshelf.Model.prototype;
const { fetch, destroy, initialize } = BookshelfProto;

const mapKeys = R.curry((fn, obj) =>
  R.fromPairs(R.map(R.adjust(fn, 0), R.toPairs(obj))));

const defaultOptions = { require: true };

module.exports = Bookshelf.Model.extend({
  hashTimestamps: true,
  softDelete: true,

  initialize(...args) {
    if (this.customError) {
      this.constructor.NotFoundError = this.customError;
      this.constructor.NoRowsUpdatedError = this.customError;
      this.constructor.NoRowsDeletedError = this.customError;
    }

    return initialize.apply(this, args);
  },

  // convert snake_case to camelCase
  parse: attrs => mapKeys(string.camelize, attrs),

  // convert camelCase to snake_case
  format: attrs => mapKeys(string.underscored, attrs),

  fetch(options) {
    return fetch.call(this, R.merge(defaultOptions, options));
  },

  destroy(options) {
    return destroy.call(this, R.merge(defaultOptions, options));
  },
});
