import express from 'express'
import { configDotenv } from 'dotenv';
import cors from 'cors'
import UserRoutes from './Routes/user-routes.js'
import CourseRoutes from './Routes/course-routes.js'
import EnrollmentRoutes from './Routes/enrollment-routes.js'

configDotenv();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors())

app.use("/", UserRoutes);
app.use("/", CourseRoutes);
app.use("/", EnrollmentRoutes)

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running on port 4000');
});

