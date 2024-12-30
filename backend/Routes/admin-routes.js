import {  getStatistics , getAllInstructors, getAllUsers} from "../Controllers/admin-controller.js";
import express from 'express'
import { auth } from "../Middleware/auth.js";

const router = express.Router();

router.get('/get-statistics', auth, getStatistics)
router.get('/get-all-instructors', auth, getAllInstructors)
router.get('/get-all-users', auth, getAllUsers)



export default router;