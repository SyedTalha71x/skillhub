import express from 'express'
import { auth } from '../Middleware/auth.js';
import { enrollToCourse , getAllEnrolledStudents, confirmEnrollment} from '../Controllers/enrollment-controller.js';

const router = express.Router();


router.post('/enroll-now', auth, enrollToCourse)
router.get('/get-all-enrolled-courses', getAllEnrolledStudents)
router.post('/confirm-enrollment', auth, confirmEnrollment)


export default router;