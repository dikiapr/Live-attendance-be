import attendanceService from "../service/attendance-list-service.js";

const create = async (req, res, next) => {
  try {
    let request = req.body;

    // Check if a file is provided
    if (req.file) {
      request = {
        ...request,
        photo: req.file.buffer.toString("base64"), // Convert photo to base64
      };
    }

    const result = await attendanceService.create(request);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    const result = await attendanceService.get();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const checkoutEmployee = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const result = await attendanceService.checkoutEmployee(id);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { create, get, checkoutEmployee };
