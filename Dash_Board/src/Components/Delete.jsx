import { DeleteProduct } from '../../config/Axcious';
import { useParams, useNavigate } from 'react-router-dom';

function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => { 
    try {
      const data = await DeleteProduct(id);
      console.log('Deleted product data:', data);

      
      navigate('/update'); 
    } catch (error) {
      console.error('Error deleting product:', error.response || error.message);
      alert('Failed to delete product');
    }
  };

  const handleCancel = () => {
    navigate(-1); 
  };

  return (
    <div className="flex items-start justify-center gap-8 h-screen w-full p-8 bg-black/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <div className="h-full w-full bg-transparent flex items-center justify-center">
        <div className="h-[50%] w-[50%] bg-white rounded-2xl shadow-black shadow-2xl p-6 flex flex-col items-center justify-center ">
          <h1 className="font-bold text-3xl mb-10">
            Are you sure to delete this product
          </h1>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleDelete}
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md active:scale-95">
              Confirm
            </button>
            <button
              onClick={handleCancel}
              type="button"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md active:scale-95">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;