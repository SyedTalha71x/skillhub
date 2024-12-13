import { SuccessResponse, FailureResponse } from "../Helper/helper.js";
import prisma from "../prismaClient/client.js";

export const enrollToCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const userId = req.user?.userId;

    if (!userId) {
      return FailureResponse(
        res,
        "Sorry, you are not authorized. Please log in first.",
        null,
        400
      );
    }

    if (!courseId) {
      return FailureResponse(res, "CourseId is required", null, 400);
    }

    const checkCourseValidity = await prisma.course.findUnique({
      where: { id: courseId },
      select: { isPublished: true },
    });

    if (!checkCourseValidity) {
      return FailureResponse(res, "Course not found", null, 400);
    }

    if (!checkCourseValidity.isPublished) {
      return FailureResponse(res, "Course is not published yet", null, 400);
    }

    const checkExistingEnrollment = await prisma.enrollment.findFirst({
      where: { studentId: userId, courseId: courseId },
    });

    if (checkExistingEnrollment) {
      return FailureResponse(
        res,
        "You are already enrolled in this course",
        null,
        400
      );
    }

    const lastenrollment = await prisma.enrollment.findFirst({
      orderBy: { enrollmentNo: "desc" },
    });

    const customizedEnrollmentNo = 1000;

    const enrollmentNo = lastenrollment
      ? Number(lastenrollment.enrollmentNo) + 1
      : customizedEnrollmentNo + 1;

    const createNew = await prisma.enrollment.create({
      data: {
        enrollmentNo: Number(enrollmentNo),
        student: {
          connect: {
            id: userId,
          },
        },
        course: {
          connect: {
            id: courseId,
          },
        },
      },
    });

    return SuccessResponse(
      res,
      "You are successfully enrolled in the course",
      { createNew },
      200
    );
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", null, 500);
  }
};
export const getAllEnrolledStudents = async (req, res) => {
  try {
    const getAll = await prisma.enrollment.findMany({
      include: {
        course: true,
        student: true,
      },
    });
    if (!getAll || getAll.length === 0) {
      return FailureResponse(res, "No enrollments found", null, 400);
    }
    const studentMapData = {};
    getAll.forEach((enrollment) => {
      const student = enrollment.student;
      if (!studentMapData[student.id]) {
        studentMapData[student.id] = {
          studentName: student.username,
          studentID: student.id,
          studentEmail: student.email,
          courses: [],
          message: "This course contains Video Tutorials",
        };
      }
      const courseTitle = enrollment.course.title;
      if (!studentMapData[student.id].courses.includes(courseTitle)) {
        studentMapData[student.id].courses.push(courseTitle);
      }
      if (!enrollment.course.videoUrl) {
        studentMapData[student.id].message =
          "This course does not contain Video Tutorials";
      }
    });
    const freshStudentData = Object.values(studentMapData);
    return SuccessResponse(
      res,
      "Successfully Fetched All Enrolled Students",
      { studentData: freshStudentData },
      200
    );
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error");
  }
};
