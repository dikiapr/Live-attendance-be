import { validate } from "../validation/validation.js";
import {
  createEmployeeValidation,
  //  getEmployeeByIdValidation,
  updateEmployeeValidation,
  deleteEmployeeValidation,
} from "../validation/employee-validation.js";
import { prismaClient } from "../application/database.js";

const create = async (request) => {
  const employee = validate(createEmployeeValidation, request);

  return prismaClient.employee.create({
    data: employee,
    select: {
      id: true,
      name: true,
      position: true,
      nik: true,
      phoneNumber: true,
    },
  });
};

const get = async () => {
  return prismaClient.employee.findMany({
    select: {
      id: true,
      name: true,
      position: true,
      nik: true,
      phoneNumber: true,
    },
  });
};

const update = async (request) => {
  const employee = validate(updateEmployeeValidation, request);

  const { id, ...data } = employee;

  return prismaClient.employee.update({
    where: { id: id },
    data: data,
    select: {
      id: true,
      name: true,
      position: true,
      nik: true,
      phoneNumber: true,
    },
  });
};

// const getById = async (request) => {
//   const { id } = validate(getEmployeeByIdValidation, request);

//   return prismaClient.employee.findUnique({
//     where: { id: id },
//     select: {
//       id: true,
//       name: true,
//       position: true,
//       nik: true,
//       phoneNumber: true
//     },
//   });
// };

const remove = async (request) => {
  const { id } = validate(deleteEmployeeValidation, request);

  return prismaClient.employee.delete({
    where: { id: id },
    select: {
      id: true,
      name: true,
      position: true,
      nik: true,
      phoneNumber: true,
    },
  });
};

export default {
  create,
  get,
  update,
  // getById,
  remove,
};
