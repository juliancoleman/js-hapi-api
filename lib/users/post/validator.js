const Joi = require("joi");

const validator = Joi.object().keys({
  email_address: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  confirm_password: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .options({ language: { any: { allowOnly: "passwords must match" } } } )
    .strip(),
}).unknown(false);

module.exports = validator;
