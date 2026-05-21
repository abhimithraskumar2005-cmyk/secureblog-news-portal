const Joi = require("joi");

const createPostSchema = Joi.object({
  title: Joi.string().trim().min(3).max(150).required(),
  content: Joi.string().trim().min(10).max(10000).required(),
  category: Joi.string().trim().min(2).max(50).required()
});

const updatePostSchema = Joi.object({
  title: Joi.string().trim().min(3).max(150),
  content: Joi.string().trim().min(10).max(10000),
  category: Joi.string().trim().min(2).max(50)
}).min(1);

const updateStatusSchema = Joi.object({
  status: Joi.string().valid("pending", "published", "rejected").required()
});

module.exports = {
  createPostSchema,
  updatePostSchema,
  updateStatusSchema
};
