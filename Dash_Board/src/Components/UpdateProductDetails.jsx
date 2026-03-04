import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetProductWithId } from '../../config/Axcious';
import UpdateForm from './updateForm';

function UpdatePageDetails() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				
				const data = await GetProductWithId(id);
				setProduct(data);
			} catch (err) {
				setError('Failed to load product.');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	if (loading) {
		return <div className="text-center mt-10">Loading...</div>;
	}

	if (error) {
		return <div className="text-center mt-10 text-red-500">{error}</div>;
	}

	if (!product) {
		return (
			<div className="text-center mt-10 text-red-500">
				No product data found.
			</div>
		);
	}

	return (
		<div className="flex items-center justify-center gap-8 h-screen w-full p-8 bg-black/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<div className="max-w-sm h-135 w-95.75 bg-white border border-gray-200 rounded-lg shadow-md p-6">
				<div className=' h-59.25 p-3'>
					<img
					src={product.image}
					alt={product.name}
					className="h-50 w-fit object-fill rounded-md mb-4"
				/>
				</div>
				
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

			<UpdateForm	
				productId={id}
				onCancel={() => window.history.back()}
				onUpdated={(updated) => {
					if (updated) {
						setProduct(prev => ({ ...prev, ...(updated.product || updated) }));
					}
				}}
			/>
		</div>
	);
}

export default UpdatePageDetails;