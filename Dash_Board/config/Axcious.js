import axios from 'axios';
import { data } from 'react-router-dom';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',
});

export const GetProduct = async () => {
	try {
		const response = await axiosInstance.get('/admin/product');
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error.response || error.message);
		throw error;
	}
};

export const PostProduct = async (productData) => {
	try {
		const response = await axiosInstance.post(
			'/admin/addProduct',
			productData,
		);
		alert('product added successfully');
	} catch (error) {
		console.error('Error posting data:', error.response || error.message);
		throw error;
	}
};

export const GetProductWithId = async (id) => {
	if (!id) {
		throw new Error('Product id is required');
	}
	try {
		const response = await axiosInstance.get(`/admin/productUsing/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error.response || error.message);
		throw error;
	}
};

// Frontend function to update a product
export const updateProductWithId = async (id, updatedData) => {
  if (!id) {
    throw new Error('Product id is required');
  }

  try {
    const response = await axiosInstance.put(`/admin/products/${id}`, updatedData);
    return response.data; 
  } catch (error) {
    console.error('Error updating product:', error.response || error.message);
    throw error;
  }
};
