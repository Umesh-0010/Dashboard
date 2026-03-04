import express from 'express';
import { adminSignIn, adminLogIn } from '../Controller/UserController.js';
const routes = express.Router();

routes.post('/', adminSignIn);
routes.post('/Login', adminLogIn);

export default routes;
