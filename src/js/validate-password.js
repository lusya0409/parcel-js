import Joi from 'joi';
console.log(Joi);

const passwordSchema = Joi.string().min(3).max(10).alphanum();

export default function validatePassword(password) {
  return passwordSchema.validate(password);
}
