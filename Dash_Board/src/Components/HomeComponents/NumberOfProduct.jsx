import { useState, useEffect } from 'react';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { GetProduct } from '../../../config/Axcious'; 

function NumberOfProduct() {
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const products = await GetProduct();
        setNumberOfProducts(products.length);  
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProductCount();
  }, []);  

  return (
    <div className="h-40 w-60 flex gap-2 items-center justify-center rounded-2xl bg-white shadow-lg shadow-gray-500/50 p-4">
      <AiOutlineAreaChart size={40} className="text-blue-600 mt-4" />
      <h1 className="text-blue-600 text-xl font-bold text-center">
        {numberOfProducts}+ <br /> Total products
      </h1>
    </div>
  );
}

export default NumberOfProduct;