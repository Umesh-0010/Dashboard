import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateProductWithId, GetProductWithId } from '../../config/Axcious'; 

function UpdateForm({ productId: propProductId, onCancel, onUpdated }) {
  const { id: routeId } = useParams();
  const navigate = useNavigate();

 
  const productId = propProductId || routeId;

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState(0); 
  
  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const data = await GetProductWithId(productId);
        const prod = data.product || data;
        setName(prod.name);
        setPrice(prod.price);
        setDescription(prod.description);
        setImage(prod.image);
        setQuantity(prod.quantity);
      } catch (error) {
        console.error('Failed to load product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  
  const handleUpdate = async () => {
    if (!productId) {
      console.error('Cannot update, missing product ID');
      return;
    }

    try {
      const updatedData = { name, price, description, image, quantity };
      const result = await updateProductWithId(productId, updatedData);
      console.log('Product updated:', result);
      if (onUpdated) {
        
        onUpdated(result.product || result);
      }
      
      if (!onUpdated) {
        navigate(-1);
      }
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  
  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  return (
    <div>
      <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Update Product
        </h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Image URL:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Update
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;