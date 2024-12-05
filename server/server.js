import express from 'express'
import { configDotenv } from 'dotenv';
import cors from 'cors'
import UserRoutes from './Routes/user-routes.js'
import CourseRoutes from './Routes/course-routes.js'

configDotenv();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors())

app.use("/", UserRoutes);
app.use("/", CourseRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
