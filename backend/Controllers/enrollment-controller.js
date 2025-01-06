import { SuccessResponse, FailureResponse } from "../Helper/helper.js";
import prisma from "../prismaClient/client.js";
import Stripe from "stripe";
import moment from "moment";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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

    const unitAmount = Math.round(checkCourseValidity.price * 100);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: checkCourseValidity.title },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      client_reference_id: courseId,
    });

    let expirationDate;
    if (!checkCourseValidity.FlagValidity === -1) {
      const expirationDays = checkCourseValidity.FlagValidity;
      console.log(expirationDays);
      
      expirationDate = moment().add(expirationDays, "days").toDate();
    }
    

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
        expiryDate: expirationDate,
      },
    });

    return SuccessResponse(
      res,
      "Payment session created. Please complete your payment.",
      { session, createNew },
      200
    );
  } catch (error) {
    console.log(error);
    return FailureResponse(res, "Internal Server Error", null, 500);
  }
};
export const confirmEnrollment = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { sessionId } = req.body;

    if (!sessionId) {
      return FailureResponse(res, "Session id not found", null);
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const payment_intent_id = session.payment_intent;

    const courseId = session.client_reference_id;

    const enrollment = await prisma.enrollment.findFirst({
      where: {
        studentId: userId,
        courseId: courseId,
        status: "pending",
      },
    });

    console.log(enrollment);
    

    if (!enrollment) {
      return FailureResponse(res, "Enrollment not found", null, 400);
    }

    const updateEnrollment = await prisma.enrollment.update({
      where: { id: enrollment.id},
      data: {
        status: "Paid",
        paymentId: payment_intent_id
      },
    });

    return SuccessResponse(
      res,
      "Enrollment confirmed and payment successfully processed",
      { updateEnrollment },
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
export const checkPurchaseCourseStatus = async (req,res) =>{
  try{
    const courseId = req.query.courseId;

    const userId = req.user.userId;
    if(!userId){
      return FailureResponse(res, 'User is not authorized', null, 400)
    }

    const isenrolled = await prisma.enrollment.findUnique({
      where: {id: userId, courseId: String(courseId), status: 'Paid'}
    })

    if(isenrolled){
      return SuccessResponse(res, 'Yes you have purchased this course', {isenrolled: true}, 200)
    }
    else{
      return SuccessResponse(res, 'You have not purchased this course yet', {isenrolled: false}, 200)

    }


  }
  catch(error){
    console.log(error);
    return FailureResponse(res, 'Internal Server Error')
    
  }
}
