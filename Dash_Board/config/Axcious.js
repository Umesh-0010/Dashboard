import axios from 'axios';


const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000',
	withCredentials: true 
});

export const registerUser = async (registerData) => {
	try {
		const response = await axiosInstance.post('/users', registerData );
		return response.data;   
	} catch (error) {
		throw error.response?.data?.message || "An error occurred";
	}
};

export const loginUser = async (loginData) => {
	try {
		const response = await axiosInstance.post('/users/Login', loginData );
		return response.data;   
	} catch (error) {
		throw error.response?.data?.message || "An error occurred";
	}
};

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


export const updateProductWithId = async (id, updatedData) => {
  if (!id) {
    throw new Error('Product id is required');
  }

  try {
    const response = await axiosInstance.put(`/admin/products/${id}`, updatedData);
	alert("data update success fully")
    return response.data; 
  } catch (error) {
    console.error('Error updating product:', error.response || error.message);
    throw error;
  }
};

export const DeleteProduct = async (id) =>{
	  if (!id) {
    throw new Error('Product id is required');
  }

  try {
    const response = await axiosInstance.delete(`/admin/products/${id}`);
    alert("Product deleted successfully");
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error.response || error.message);
    throw error;
  }

}
