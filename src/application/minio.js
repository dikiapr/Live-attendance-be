import { Client as MinioClient } from "minio";

const minioClient = new MinioClient({
  endPoint: "localhost",
  port: 9000,
  useSSL: false,
  accessKey: "minioadmin",
  secretKey: "minioadmin",
});

export const uploadToMinio = async (photo) => {
  const buffer = Buffer.from(photo, "base64");
  const fileName = `photo-${Date.now()}.jpg`;

  await minioClient.putObject("employee-pic", fileName, buffer);

  return `http://localhost:9000/employee-pic/${fileName}`;
};
