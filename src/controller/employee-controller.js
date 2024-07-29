import employeeService from "../service/employee-service.js";

const create = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await employeeService.create(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    const result = await employeeService.get();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const request = { ...req.body, id };
    const result = await employeeService.update(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

// const getById = async (req, res, next) => {
//   try {
//     const id = parseInt(req.params.id);
//     const result = await employeeService.getById({ id });
//     if (result) {
//       res.status(200).json({
//         data: result,
//       });
//     } else {
//       res.status(404).json({
//         error: "Employee not found",
//       });
//     }
//   } catch (e) {
//     next(e);
//   }
// };

const remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const result = await employeeService.remove({ id });
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  create,
  get,
  update,
  // getById,
  remove,
};
