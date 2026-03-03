import { BiSolidBuilding } from "react-icons/bi";

function InwardProducts() {
  const numberOfProducts = 100; 

  return (
    <div className="h-40 w-60 flex gap-2 items-center justify-center rounded-2xl bg-white shadow-lg shadow-gray-500/50 p-4">
      <BiSolidBuilding  size={40} className="text-yellow-400 mt-4" />
      <h1 className="text-blue-600 text-xl font-bold text-center">
        {numberOfProducts}+ <br /> Inward products
      </h1>
    </div>
  );
}

export default InwardProducts;