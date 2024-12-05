import express from 'express'
import { auth } from '../Middleware/auth.js';
import {createCourse, updateCourse} from '../Controllers/course-controller.js'

const router = express.Router();

router.post('/create-course', auth, createCourse)
router.post('/update-course/:id', auth, updateCourse)

export default router;