const Joi = require("joi");

const validator = Joi.object().keys({
  userId: Joi.number().integer().required(),
}).unknown(false);

module.exports = validator;
