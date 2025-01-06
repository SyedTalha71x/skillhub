import express from 'express'
import { auth } from '../Middleware/auth.js';
import { enrollToCourse , getAllEnrolledStudents, confirmEnrollment, checkPurchaseCourseStatus} from '../Controllers/enrollment-controller.js';

const router = express.Router();


router.post('/enroll-now', auth, enrollToCourse)
router.get('/get-all-enrolled-courses', getAllEnrolledStudents)
router.post('/confirm-enrollment', auth, confirmEnrollment)
router.get('/check-purchase-status-of-course', auth, checkPurchaseCourseStatus)



export default router;