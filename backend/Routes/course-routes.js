import express from 'express'
import { auth } from '../Middleware/auth.js';
import {createCourse, getAllCourses, updateCourse, getSingleCourse, deleteCourse} from '../Controllers/course-controller.js'

const router = express.Router();

router.post('/create-course', auth, createCourse)
router.post('/update-course/:id', auth, updateCourse)
router.get('/get-all-courses', getAllCourses)
router.get('/get-single-course/:slug', getSingleCourse)
router.delete('/delete-course/:id', auth, deleteCourse)

export default router;