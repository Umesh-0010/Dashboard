import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config({ quiet: true });

import adminRoutes from './Routes/AdminRoutes.js';
import userRoutes from './Routes/UsersRoutes.js'
import verifyUser from './Middleware/AuthMiddleware.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,   
	})
);
app.use(express.json());
app.use(cookieParser());

app.use('/users', userRoutes);  
app.use('/admin', verifyUser, adminRoutes);

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
