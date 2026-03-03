

function UpdatePage() {
  
 

	
	 const products = [
  { id: 1, name: "Wireless Headphones", price: 99.99, description: "High-quality wireless headphones with noise cancellation and 20 hours battery life.", image: "https://via.placeholder.com/400x300", quantity: 5 },
  { id: 2, name: "Smart Watch", price: 149.99, description: "Feature-rich smart watch with fitness tracking and heart rate monitoring.", image: "https://via.placeholder.com/400x300", quantity: 10 },
  { id: 3, name: "Portable Speaker", price: 59.99, description: "Compact portable speaker with deep bass and Bluetooth connectivity.", image: "https://via.placeholder.com/400x300", quantity: 7 },
  { id: 4, name: "Gaming Mouse", price: 49.99, description: "Ergonomic gaming mouse with customizable RGB lighting and high precision.", image: "https://via.placeholder.com/400x300", quantity: 12 },
  { id: 5, name: "Mechanical Keyboard", price: 89.99, description: "Durable mechanical keyboard with tactile switches and backlighting.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfQYVl9EhwW4UMUXto_GVpwi_29pWVTWZLQ&s", quantity: 8 },
  { id: 6, name: "4K Monitor", price: 299.99, description: "Ultra HD 27-inch monitor with vivid colors and high refresh rate.", image: "https://via.placeholder.com/400x300", quantity: 4 },
  { id: 7, name: "Bluetooth Earbuds", price: 79.99, description: "Compact earbuds with rich sound, long battery life, and water resistance.", image: "https://via.placeholder.com/400x300", quantity: 15 },
  { id: 8, name: "External Hard Drive", price: 109.99, description: "1TB portable hard drive with fast data transfer and durable casing.", image: "https://via.placeholder.com/400x300", quantity: 6 },
  { id: 9, name: "Smartphone Gimbal", price: 129.99, description: "3-axis gimbal stabilizer for smooth video recording with smartphones.", image: "https://via.placeholder.com/400x300", quantity: 9 },
  { id: 10, name: "VR Headset", price: 399.99, description: "Immersive virtual reality headset with high-resolution displays and motion tracking.", image: "https://via.placeholder.com/400x300", quantity: 3 },
  { id: 11, name: "Fitness Tracker", price: 69.99, description: "Lightweight fitness tracker with heart rate monitoring and sleep tracking.", image: "https://via.placeholder.com/400x300", quantity: 14 },
  { id: 12, name: "Laptop Stand", price: 39.99, description: "Adjustable laptop stand for ergonomic working and better airflow.", image: "https://via.placeholder.com/400x300", quantity: 20 },
  { id: 13, name: "Wireless Charger", price: 29.99, description: "Fast wireless charging pad compatible with Qi-enabled devices.", image: "https://via.placeholder.com/400x300", quantity: 18 },
  { id: 14, name: "Action Camera", price: 199.99, description: "Compact action camera with 4K recording, waterproof design, and Wi-Fi.", image: "https://via.placeholder.com/400x300", quantity: 5 },
  { id: 15, name: "Noise-Canceling Earbuds", price: 129.99, description: "Premium earbuds with active noise cancellation and deep bass.", image: "https://via.placeholder.com/400x300", quantity: 7 },
  { id: 16, name: "Smart Home Hub", price: 149.99, description: "Central hub to control smart home devices, voice-enabled and easy setup.", image: "https://via.placeholder.com/400x300", quantity: 6 },
  { id: 17, name: "Drone with Camera", price: 499.99, description: "Quadcopter drone with HD camera, GPS, and easy flight controls.", image: "https://via.placeholder.com/400x300", quantity: 2 },
  { id: 18, name: "Portable SSD", price: 159.99, description: "High-speed 512GB portable SSD for fast file transfers on the go.", image: "https://via.placeholder.com/400x300", quantity: 10 },
  { id: 19, name: "Smart Light Bulb", price: 24.99, description: "Wi-Fi-enabled smart bulb with adjustable colors and brightness.", image: "https://via.placeholder.com/400x300", quantity: 25 },
  { id: 20, name: "Gaming Laptop", price: 1299.99, description: "High-performance gaming laptop with RTX graphics, 16GB RAM, and 1TB SSD.", image: "https://via.placeholder.com/400x300", quantity: 3 }
];
	

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
			{products.map((product) => (
				<div
					key={product.id}
					className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6">
					<img
						src={product.image}
						alt={product.name}
						className="w-full h-64 object-cover rounded-md mb-4"
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
						<span className="text-gray-800">
							{product.quantity}
						</span>
					</div>

					<div className="flex gap-4">
						<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
							Update
						</button>
						<button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default UpdatePage;
