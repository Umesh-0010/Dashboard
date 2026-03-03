import axios from 'axios';
import { useEffect, useState } from 'react';

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
    const response = await axiosInstance.post('/admin/addProduct', productData);
    alert("product added successfully")
    
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error.response || error.message);
    throw error;
  }
};