const Joi = require("joi");

const pluralValidator = Joi.object().keys({
  email_address: Joi.string().email(),
  pageSize: Joi.number().integer().positive().default(10),
  page: Joi.number().integer().positive().default(1),
  sort: Joi.string().valid([
    "email_address",
  ]).default("email_address"),
}).unknown(false);

const singularValidator = Joi.object().keys({
  userId: Joi.number().integer().positive().required(),
}).unknown(false);

module.exports = {
  singularValidator,
  pluralValidator,
};
