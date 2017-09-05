const R = require("ramda");
const string = require("underscore.string");

const Bookshelf = appRequire("config/bookshelf");

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

    return Bookshelf.Model.prototype.initialize.apply(this, args);
  },

  // convert snake_case to camelCase
  parse: attrs => mapKeys(string.camelize, attrs),

  // convert camelCase to snake_case
  format: attrs => mapKeys(string.underscored, attrs),

  fetch(options) {
    return Bookshelf.Model.prototype.fetch.call(this, R.merge(defaultOptions, options));
  },

  destroy(options) {
    return Bookshelf.Model.prototype.destroy.call(this, R.merge(defaultOptions, options));
  },
});
