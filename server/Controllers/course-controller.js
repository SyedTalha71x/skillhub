import { SuccessResponse, FailureResponse } from "../Helper/helper.js";
import prisma from "../prismaClient/client.js";

export const createCourse = async (req, res) => {
  try {
    let { title, description, price, category, thumbnail, syllabus, duration } =
      req.body;

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

    const addCourse = await prisma.course.create({
      data: {
        title,
        description,
        price,
        category,
        instructorId: userId,
        thumbnail,
        syllabus,
        duration,
        isPublished: true,
      },
    });
    console.log(addCourse, "-----------");

    return SuccessResponse(
      res,
      "Course has been made by instructor",
      { addCourse },
      200
    );
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", null, 400);
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
    } = req.body;

    let newPayload = {};
    if (title) newPayload.title = title;
    if (description) newPayload.description = description;
    if (price) newPayload.price = price;
    if (category) newPayload.category = category;
    if (thumbnail) newPayload.thumbnail = thumbnail;
    if (syllabus) newPayload.syllabus = syllabus;
    if (duration) newPayload.duration = duration;

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
