import { useState } from 'react';
import { PostProduct } from '../../config/Axcious'; 

function AddingForm() {
	const [product, setProduct] = useState({
		name: '',
		price: '',
		description: '',
		image: '',
		quantity: '',
	});

	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const data = await PostProduct(product);
			console.log('Product added successfully:', data);

			setProduct({
				name: '',
				price: '',
				description: '',
				image: '',
				quantity: '',
			});
		} catch (error) {
			console.error('Error adding product:', error);
		}
	};

	return (
		<div className="flex justify-center items-center">
			<form
				onSubmit={handleSubmit}
				className="bg-blue-300 p-6 rounded-lg shadow-md w-96 space-y-4">
				<h2 className="text-xl font-semibold text-center text-white">
					Add Product
				</h2>

				<input
					type="text"
					name="name"
					placeholder="Product Name"
					value={product.name}
					onChange={handleChange}
					className="w-full bg-blue-400 outline-0 p-2 rounded"
					required
				/>

				<input
					type="number"
					name="price"
					placeholder="Price"
					value={product.price}
					onChange={handleChange}
					className="w-full bg-blue-400 outline-0 p-2 rounded"
					required
				/>

				<textarea
					name="description"
					placeholder="Description"
					value={product.description}
					onChange={handleChange}
					className="w-full bg-blue-400 outline-0 p-2 rounded"
					required
				/>

				<input
					type="text"
					name="image"
					placeholder="Image URL"
					value={product.image}
					onChange={handleChange}
					className="w-full bg-blue-400 outline-0 p-2 rounded"
				/>

				<input
					type="number"
					name="quantity"
					placeholder="Quantity"
					value={product.quantity}
					onChange={handleChange}
					className="w-full bg-blue-400 outline-0 p-2 rounded"
					required
				/>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white p-2 rounded active:scale-95">
					Add Product
				</button>
			</form>
		</div>
	);
}

export default AddingForm;
