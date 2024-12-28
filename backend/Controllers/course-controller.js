import multer from "multer";
import { SuccessResponse, FailureResponse } from "../Helper/helper.js";
import prisma from "../prismaClient/client.js";
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { configDotenv } from "dotenv";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import getVideoDurationInSeconds from "get-video-duration";
import { object } from "zod";

configDotenv();

const s3client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const uploadVideoToS3 = async (fileBuffer, fileName, contentType) => {
  const bucketName = process.env.BUCKET_NAME;
  if (!bucketName) throw new Error("S3 bucket name is not configured");

  const uniqueFileName = `videos/${uuidv4()}-${fileName}`;

  const params = {
    Bucket: bucketName,
    Key: uniqueFileName,
    Body: fileBuffer,
    ContentType: contentType,
  };

  await s3client.send(new PutObjectCommand(params));
  return uniqueFileName;
};
const generatePreSignedURL = async (key) => {
  const bucketName = process.env.BUCKET_NAME;
  const params = {
    Bucket: bucketName,
    Key: key,
  };
  const url = await getSignedUrl(s3client, new GetObjectCommand(params), {
    expiresIn: 3600,
  });
  return url;
};

const upload = multer({ storage: multer.memoryStorage() }).array("videos", 10);

export const createCourse = async (req, res) => {
  try {
    let {
      title,
      description,
      price,
      category,
      thumbnail,
      syllabus,
      duration,
      FlagValidity,
      courselvl,
    } = req.body;

    const userId = req.user?.userId;
    if (!userId) {
      return FailureResponse(res, "User is not authorized", null, 400);
    }

    const role_to_user = await prisma.role_To_User.findMany({
      where: { userId: userId },
      include: { role: true },
    });

    if (!role_to_user.length || role_to_user[0].role.name !== "Instructor") {
      return FailureResponse(
        res,
        "Sorry, you are not authorized as an instructor",
        null,
        400
      );
    }

    let newFlagValidity = FlagValidity || null;

    const slug = title.replace(/\s+/g, "-").toLowerCase();
    const addCourse = await prisma.course.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        category,
        instructorId: userId,
        thumbnail,
        syllabus:
          typeof syllabus === "string" ? JSON.parse(syllabus) : syllabus,
        duration: parseInt(duration),
        isPublished: true,
        FlagValidity: newFlagValidity,
        slug,
        courselvl,
      },
    });

    return SuccessResponse(
      res,
      "Course has been made by instructor",
      { ...addCourse },
      200
    );
  } catch (error) {
    console.error("Error:", error.message || error);
    return FailureResponse(res, "Internal Server Error", null, 500);
  }
};

export const updateCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user.userId;
    if (!userId) {
      return FailureResponse(res, "User is not authorized", null, 400);
    }

    const {
      title,
      description,
      price,
      category,
      thumbnail,
      syllabus,
      duration,
      FlagValidity,
      courselvl,
    } = req.body;

    let newPayload = {};
    if (title) newPayload.title = title;
    if (description) newPayload.description = description;
    if (price) newPayload.price = price;
    if (category) newPayload.category = category;
    if (thumbnail) newPayload.thumbnail = thumbnail;
    if (syllabus) newPayload.syllabus = syllabus;
    if (duration) newPayload.duration = duration;
    if (FlagValidity) newPayload.FlagValidity = FlagValidity;
    if (courselvl) newPayload.courselvl = courselvl;

    const role_to_user = await prisma.role_To_User.findMany({
      where: { userId: userId },
      include: { role: true },
    });

    if (role_to_user[0].role.name !== "Instructor") {
      console.log(role_to_user[0].role.name !== "Instructor");
      return FailureResponse(
        res,
        "Sorry, you are not authorized as an instructor",
        null,
        400
      );
    }
    const updateCourse = await prisma.course.update({
      where: { id: id },
      data: newPayload,
    });
    if (updateCourse) {
      return SuccessResponse(
        res,
        "Successfully update the record",
        { updateCourse },
        200
      );
    }
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", null, 400);
  }
};
export const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.user.userId;
    if (!userId) {
      return FailureResponse(res, "User is not authorized", null, 400);
    }

    const role_to_user = await prisma.role_To_User.findMany({
      where: { userId: userId },
      include: { role: true },
    });

    if (role_to_user[0].role.name !== "Instructor") {
      console.log(role_to_user[0].role.name !== "Instructor");
      return FailureResponse(
        res,
        "Sorry, you are not authorized as an instructor",
        null,
        400
      );
    }

    await prisma.course.delete({ where: { id: id } });
    return SuccessResponse(res, "Deleted Course Successfully");
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", null, 500);
  }
};
export const getAllCourses = async (req, res) => {
  try {
    const getAllCourses = await prisma.course.findMany();

    if (getAllCourses.length === 0) {
      return FailureResponse(res, "Courses not found", null, 400);
    }
    return SuccessResponse(
      res,
      "Successfully fetched all courses",
      { getAllCourses },
      200
    );
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", null, 500);
  }
};
export const getSingleCourse = async (req, res) => {
  try {
    const { slug } = req.params;
    const getCourse = await prisma.course.findUnique({ where: { slug: slug } });

    const getUser = await prisma.user.findUnique({
      where: { id: getCourse.instructorId },
    });
    console.log(getUser);

    const newData = {
      ...Object.keys(getCourse).reduce((acc, key) => {
        acc[key] = getCourse[key];
        return acc;
      }, {}),
      instructorName: getUser.username,
    };
    
    return SuccessResponse(res, "Success", { newData }, 200);
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", null, 500);
  }
};
