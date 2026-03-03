import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.connectionString;

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false, 
  },
});





export default pool;