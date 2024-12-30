import express from 'express'
import { auth } from '../Middleware/auth.js';
import { showProfileInfo } from '../Controllers/profile-controller.js';

const router = express.Router();
router.get('/show-profile', auth, showProfileInfo)

export default router