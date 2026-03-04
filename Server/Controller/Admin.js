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

export const getAProducts = async (req, res) => {
	const { id } = req.params;
	

	try {
		const result = await pool.query(
			'SELECT * FROM products WHERE id = $1',
			[parseInt(id)],
		);

		if (result.rows.length === 0) {
			return res.status(404).json({ message: 'Product not found' });
		}

		return res.status(200).json(result.rows[0]);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: 'Error fetching product' });
	}
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image, quantity } = req.body;

  try {
    const updateQuery = `
      UPDATE products
      SET name = $1,
          price = $2,
          description = $3,
          image = $4,
          quantity = $5
      WHERE id = $6
      RETURNING *;
    `;

    const values = [name, price, description, image, quantity, id];

    const result = await pool.query(updateQuery, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
