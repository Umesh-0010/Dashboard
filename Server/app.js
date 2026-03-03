import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config({ quiet: true });

import routes from './Routes/AdminRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));
app.use(express.json());

app.use('/admin', routes);

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
