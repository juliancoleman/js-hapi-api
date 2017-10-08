const { adjust, curry, fromPairs, map, toPairs } = require("ramda");
const { underscored, camelize } = require("underscore.string");

const { Model } = appRequire("config/objection");

const mapKeys = curry((fn, obj) =>
  fromPairs(map(adjust(fn, 0), toPairs(obj))));


module.exports = class Base extends Model {
  $formatDatabaseJson(json) {
    const formattedJson = super.$formatDatabaseJson(json);

    return mapKeys(underscored, formattedJson);
  }

  $parseDatabaseJson(json) {
    return super.$parseDatabaseJson(mapKeys(camelize, json));
  }
};
