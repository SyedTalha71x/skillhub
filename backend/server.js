import express from 'express'
import { configDotenv } from 'dotenv';
import cors from 'cors'
import UserRoutes from './Routes/user-routes.js'
import CourseRoutes from './Routes/course-routes.js'
import EnrollmentRoutes from './Routes/enrollment-routes.js'
import AdminRoutes from './Routes/admin-routes.js'

configDotenv();

const app = express();

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cors())

app.use("/", UserRoutes);
app.use("/", CourseRoutes);
app.use("/", EnrollmentRoutes)
app.use("/", AdminRoutes)

app.use('/users', (req,res)=>{
    res.send({msg: ' hello worldd'})
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

