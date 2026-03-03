import React, { useState, useEffect } from 'react';
import { GetProduct } from '../../config/Axcious'; 

const ProductCard = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetProduct();
        setProducts(data);
      } catch (error) {
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      Loading...
    </div>
  );
}

  if (error) {
    return <div>{error}</div>;
  }

  
 

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-100% h-100% object-cover rounded-md mb-4"
          />

          <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-lg font-bold text-green-600 mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="flex items-center">
            <span className="mr-2 text-gray-700 font-medium">Quantity:</span>
            <span className="text-gray-800">{product.quantity}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;