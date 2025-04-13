const joi = require('joi');

const taskSchema = joi.object({
    title: joi.string(),
    description: joi.string().required(),
    status: joi.string().valid('pending', 'in-progress', 'completed').default('pending'),
    createdAt: joi.date().default(Date.now),
});

const statusSchema = joi.object({
    status: joi.string().valid('pending', 'in-progress', 'completed').required(),
});

module.exports =
{
    taskSchema,
    statusSchema
};