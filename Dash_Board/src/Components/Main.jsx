import { Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import Product from '../Pages/Product';
import AddProduct from '../Pages/AddProduct';
import Update from '../Pages/Update';

function Main() {
  return (
    <div className="w-[248.5px] h-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/update" element={<Update />} />


      </Routes>
    </div>
  );
}

export default Main;