import {  getStatistics , getAllInstructors} from "../Controllers/admin-controller.js";
import express from 'express'
import { auth } from "../Middleware/auth.js";

const router = express.Router();

router.get('/get-statistics', auth, getStatistics)
router.get('/get-all-instructors', auth, getAllInstructors)


export default router;