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
				if (!id) {
					setError('No product ID provided');
					setLoading(false);
					return;
				}
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
		<div className="flex items-start justify-center gap-8 h-screen w-full p-8 bg-black/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md p-6">
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