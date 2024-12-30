import { SuccessResponse, FailureResponse } from "../Helper/helper.js";
import prisma from "../prismaClient/client.js";

export const getStatistics = async (req, res) => {
  try {
    const userId = req.user.userId;
    if (!userId) {
      return FailureResponse(res, "You are not authenticated", null, 400);
    }
    const purchaseRecords = await prisma.enrollment.count();

    const allUsers = await prisma.role_To_User.count({
      where: {
        role: {
          name: "Student",
        },
      },
    });
    const results = await prisma.enrollment.findMany({
      include: {
        course: {
          select: {
            price: true,
          },
        },
      },
    });

    const totalCourses = await prisma.course.count();

    const totalRevenew = results.reduce((sum, enrollment) => {
      return parseInt(sum + enrollment.course.price || 0);
    }, 0);
    return SuccessResponse(
      res,
      "Success",
      { purchaseRecords, allUsers, totalRevenew, totalCourses },
      200
    );
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", null, 500);
  }
};
export const getAllInstructors = async (req, res) => {
  try {
    const userId = req.user.userId;
    if (!userId) {
      return FailureResponse(res, "You are not authenticated", null, 400);
    }
    const getAllInstructors = await prisma.role_To_User.findMany({
      where: {
        role: {
          name: "Instructor",
        },
      },
      include: {
        user: true,
      },
    });
    return SuccessResponse(res, "Success", { getAllInstructors }, 200);
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", null, 500);
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const userId = req.user.userId;
    if (!userId) {
      return FailureResponse(res, "User is not authorized", null, 400);
    }

    const role_to_user = await prisma.role_To_User.findMany({
      where: { userId: userId },
      include: {
        role: true,
      },
    });

    if (!role_to_user.length || role_to_user[0].role.name !== "Instructor") {
      return FailureResponse(
        res,
        "Sorry you are not authorized as an Instructor",
        null,
        400
      );
    }
    const getAllUsers = await prisma.user.findMany({
      where: {
        NOT: {
          roles: {
            some: {
              role: {
                name: {
                  in: ["Admin", "Instructor"],
                },
              },
            },
          },
        },
      },
    });

    return SuccessResponse(res, "Success", { getAllUsers }, 200);
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", null, 500);
  }
};
