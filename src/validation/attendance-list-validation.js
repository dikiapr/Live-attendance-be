import Joi from "joi";

const createAttendanceValidation = Joi.object({
  presenceType: Joi.string().max(50).required(),
  employeeId: Joi.number().integer().required(),
  photo: Joi.string().required(),
});

export { createAttendanceValidation };
