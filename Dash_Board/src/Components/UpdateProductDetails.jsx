import React, { useState } from 'react';

function UpdatePageDetails() {
	const products = [
		{
			id: 5,
			name: 'Mechanical Keyboard',
			price: 89.99,
			description:
				'Durable mechanical keyboard with tactile switches and backlighting.',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfQYVl9EhwW4UMUXto_GVpwi_29pWVTWZLQ&s',
			quantity: 8,
		},
	];

	const product = products[0];

	// State for form inputs
	const [name, setName] = useState(product.name);
	const [price, setPrice] = useState(product.price);
	const [image, setImage] = useState(product.image);
	const [description, setDescription] = useState(product.description);

	const handleUpdate = () => {
		
		console.log('Updated Product:', { name, price, image, description });
		alert('Product updated successfully!');
	};

	const handleCancel = () => {
		setName(product.name);
		setPrice(product.price);
		setImage(product.image);
		setDescription(product.description);
	};

	return (
<div className="flex items-start justify-center gap-8 h-screen w-full p-8 bg-black/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
			
			<div
				key={product.id}
				className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md p-6">
				<img
					src={product.image}
					alt={product.name}
					className="w-100% h-100% object-cover rounded-md mb-4"
				/>
				<h2 className="text-xl font-semibold text-gray-800 mb-2">
					{product.name}
				</h2>
				<p className="text-lg font-bold text-green-600 mb-2">
					${product.price}
				</p>
				<p className="text-gray-600 mb-4">{product.description}</p>
				<div className="flex items-center mb-4">
					<span className="mr-2 text-gray-700 font-medium">
						Quantity:
					</span>
					<span className="text-gray-800">{product.quantity}</span>
				</div>
			</div>

			
			<div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between">
				<h2 className="text-xl font-semibold text-gray-800 mb-4">
					Update Product
				</h2>
				<form className="flex flex-col gap-4 flex-1">
					<div>
						<label className="block text-gray-700 mb-1">
							Name:
						</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full border border-gray-300 rounded-md p-2"
						/>
					</div>

					<div>
						<label className="block text-gray-700 mb-1">
							Price:
						</label>
						<input
							type="number"
							value={price}
							onChange={(e) =>
								setPrice(parseFloat(e.target.value))
							}
							className="w-full border border-gray-300 rounded-md p-2"
						/>
					</div>

					<div>
						<label className="block text-gray-700 mb-1">
							Description:
						</label>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="w-full border border-gray-300 rounded-md p-2"
							required
						/>
					</div>

					<div>
						<label className="block text-gray-700 mb-1">
							Image URL:
						</label>
						<input
							type="text"
							value={image}
							onChange={(e) => setImage(e.target.value)}
							className="w-full border border-gray-300 rounded-md p-2"
						/>
					</div>

					<div className="flex gap-4 mt-4">
						<button
							type="button"
							onClick={handleUpdate}
							className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
							Update
						</button>
						<button
							type="button"
							onClick={handleCancel}
							className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">
							Cancel
						</button>
					</div>
				</form>
			</div>

		</div>
	);
}

export default UpdatePageDetails;
