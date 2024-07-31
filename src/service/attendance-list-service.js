import { validate } from "../validation/validation.js";
import { prismaClient } from "../application/database.js";
import { createAttendanceValidation } from "../validation/attendance-list-validation.js";
import { uploadToMinio } from "../application/minio.js";

const create = async (request) => {
  const attendance = validate(createAttendanceValidation, request);

  // Upload photo to MinIO and get the URL
  const photoUrl = await uploadToMinio(request.photo);

  return prismaClient.attendanceList.create({
    data: {
      ...attendance,
      photo: photoUrl, // Save the photo URL
      location: attendance.location, // Save the location
    },
    select: {
      id: true,
      checkIn: true,
      checkOut: true,
      presenceType: true,
      employee: {
        select: {
          name: true,
        },
      },
      photo: true, // Include photo in the response
      location: true, // Include location in the response
    },
  });
};

const get = async () => {
  return prismaClient.attendanceList.findMany({
    select: {
      id: true,
      checkIn: true,
      checkOut: true,
      presenceType: true,
      employee: {
        select: {
          name: true,
        },
      },
      photo: true, // Include photo in the response
      location: true, // Include location in the response
    },
  });
};

const checkoutEmployee = async (id) => {
  return prismaClient.attendanceList.update({
    where: { id: id },
    data: { checkOut: new Date() },
    select: {
      id: true,
      checkIn: true,
      checkOut: true,
      presenceType: true,
      employee: {
        select: {
          name: true,
        },
      },
      photo: true, // Include photo in the response
      location: true, // Include location in the response
    },
  });
};

export default { create, get, checkoutEmployee };
