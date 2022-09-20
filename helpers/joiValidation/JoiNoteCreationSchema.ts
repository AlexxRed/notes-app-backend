import Joi from 'joi';

export const JoiNoteCreationSchema = Joi.object({
  _id: Joi.string().optional(),
  name: Joi.string().min(2).required(),
  content: Joi.string().min(2).max(1000),
  created: Joi.any(),
  category: Joi.string().optional(),
  dates: Joi.string().optional(),
  archive: Joi.boolean()
});

