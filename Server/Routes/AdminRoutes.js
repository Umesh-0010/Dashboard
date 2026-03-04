import express from 'express';
import {
	createProduct,
	getAllProducts,
	getAProducts,
	updateProduct,
	deleteProduct,
} from '../Controller/AdminController.js';
const routes = express.Router();

routes.post('/addProduct', createProduct);

routes.get('/product', getAllProducts);

routes.get('/productUsing/:id', getAProducts);

routes.put('/products/:id', updateProduct);

routes.delete('/products/:id', deleteProduct);

export default routes;
