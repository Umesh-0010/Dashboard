import express from 'express'
import {createProduct, getAllProducts} from '../Controller/Admin.js'
const routes = express.Router()


routes.post('/addProduct', createProduct)


routes.get('/product', getAllProducts )





export default routes