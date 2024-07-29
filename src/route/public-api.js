import express from "express";
import employeeController from "../controller/employee-controller.js";
import attendanceListController from "../controller/attendance-list-controller.js";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

const publicRouter = new express.Router();
publicRouter.post("/api/employee", employeeController.create);
publicRouter.get("/api/employee", employeeController.get);
// publicRouter.get("/api/employee/:id", employeeController.getById);
publicRouter.put("/api/employee/:id", employeeController.update);
publicRouter.delete("/api/employee/:id", employeeController.remove);

publicRouter.post("/api/attendance", upload.single("photo"), attendanceListController.create);
publicRouter.get("/api/attendance", attendanceListController.get);

publicRouter.patch("/api/attendance/checkout/:id", attendanceListController.checkoutEmployee);

export { publicRouter };
