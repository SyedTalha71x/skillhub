import express from 'express'
import { validate } from '../Validation/validation.js';
import { signupSchema } from '../validationSchema/validation.js';
import { register, login } from '../Controllers/user-controller.js';

const router = express.Router();

router.post('/signup', validate(signupSchema), register)
router.post('/login', login)


export default router;
