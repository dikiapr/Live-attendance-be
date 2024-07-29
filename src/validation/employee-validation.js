import Joi from "joi";

const createEmployeeValidation = Joi.object({
  name: Joi.string().max(100).required(),
  position: Joi.string().max(100).required(),
  nik: Joi.string().max(100).required(),
  phoneNumber: Joi.string().max(100).required(),
});

const updateEmployeeValidation = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().max(100),
  position: Joi.string().max(100),
  nik: Joi.string().max(100),
  phoneNumber: Joi.string().max(100),
});

// const getEmployeeByIdValidation = Joi.object({
//   id: Joi.number().integer().required(),
// });

const deleteEmployeeValidation = Joi.object({
  id: Joi.number().integer().required(),
});

export {
  createEmployeeValidation,
  updateEmployeeValidation,
  //  getEmployeeByIdValidation,
  deleteEmployeeValidation,
};
