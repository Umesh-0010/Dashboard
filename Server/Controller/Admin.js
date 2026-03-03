import pool from '../config/database.js';

export const createProduct = async (req, res) => {
	const { name, price, description, image, quantity } = req.body;

	if (!name || !price || !quantity) {
		return res.status(400).json({ message: 'Missing required fields' });
	}

	try {
		const query = `
      INSERT INTO products (name, price, description, image, quantity)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, name, price, description, image, quantity;
    `;

		const values = [name, price, description, image, quantity];

		const result = await pool.query(query, values);

		return res.status(201).json({
			message: 'Product created successfully',
			product: result.rows[0],
		});
	} catch (error) {
		console.error('Error inserting product:', error);
		return res.status(500).json({ message: 'Server error' });
	}
};



export const getAllProducts = async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM products');

		if (result.rows.length === 0) {
			return res.status(404).json({ message: 'No products found' });
		}

		res.status(200).json(result.rows);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error fetching products' });
	}
};


export const getProductsToUpdate = async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM products');

		if (result.rows.length === 0) {
			return res.status(404).json({ message: 'No products found' });
		}

		res.status(200).json(result.rows);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error fetching products' });
	}
};





export const updateProduct = async (req, res) => {
  const { id } = req.params; 
  const { name, description, price, image,  } = req.body; 

  // Validate that the required fields are provided
  if (!name || !description || !price || !image) {
    return res.status(400).json({ message: 'All fields (name, description, price) are required.' });
  }

  try {
    // Query to update the product in the database
    const result = await pool.query(
      'UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
      [name, description, price, id]
    );

    // If no product with the given ID is found
    if (result.rows.length === 0) {
      return res.status(404).json({ message: `Product with ID ${id} not found` });
    }

    // Return the updated product as a JSON response
    res.status(200).json(result.rows[0]);
  } catch (error) {
    // Log the error and send a 500 server error response
    console.error(error);
    res.status(500).json({ message: 'Error updating product' });
  }
};








