import React from 'react';
import ProductCard from '../Components/productCard';

function Product() {
  return (
    <div className="w-248 h-162 p-10 bg-blue-100 overflow-scroll noschrollbar ">
     <ProductCard/>
    </div>
  );
}

export default Product;