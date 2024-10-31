import express from 'express'
import { PrismaClient } from '@prisma/client/extension';
import { configDotenv } from 'dotenv';
import cors from 'cors'
import UserRoutes from './Routes/user-routes.js'

configDotenv();

const app = express();

const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors())

app.use("/", UserRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
