const Joi = require("joi");

const validator = Joi.object().min(1).keys({
  email_address: Joi.string().email(),
}).unknown(false);

module.exports = validator;
