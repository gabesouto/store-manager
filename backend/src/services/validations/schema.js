const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).max(2)
.required();

const addProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
});

module.exports = {
  idSchema,
  addProductSchema,
};
