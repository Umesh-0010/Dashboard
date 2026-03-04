import bcrypt from 'bcrypt';

import pool from '../config/database.js';
import dotenv from 'dotenv';
dotenv.config({ quiet: true });

export const adminSignIn = async (req, res) => {
	let { id, name, password } = req.body;

	if (!id || !name || !password) {
		return res.status(400).json({ message: 'All fields are required' });
	}

	const idRegex = /^\d{10}$/;
	if (!idRegex.test(id)) {
		return res
			.status(400)
			.json({ message: 'ID must be a 10-digit number' });
	}

	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|\\:;'"<>,.?/-]).{8,}$/;
	if (!passwordRegex.test(password)) {
		return res.status(400).json({
			message:
				'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long.',
		});
	}

	try {
		const checkIdQuery = 'SELECT * FROM admin WHERE id = $1';
		const checkIdResult = await pool.query(checkIdQuery, [id]);

		if (checkIdResult.rowCount > 0) {
			return res
				.status(400)
				.json({ message: 'ID already exists, Go to login' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const insertQuery = `
      INSERT INTO admin (id, name, password)
      VALUES ($1, $2, $3)
      RETURNING id, name
    `;

		const result = await pool.query(insertQuery, [
			id,
			name,
			hashedPassword,
		]);

		if (result.rowCount > 0) {
			return res.status(201).json({
				message: 'Admin Id created successfully',
				adminId: result.rows[0].id,
				name: result.rows[0].name,
			});
		} else {
			return res.status(500).json({ message: 'Failed to create admin' });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: 'Internal server error' });
	}
};

export const adminLogIn = async (req, res) => {
	let { id, password } = req.body;

	if (!id || !password) {
		return res
			.status(400)
			.json({ message: 'ID and password are required' });
	}

	try {
		const checkIdQuery = 'SELECT * FROM admin WHERE id = $1';
		const checkIdResult = await pool.query(checkIdQuery, [id]);

		if (checkIdResult.rowCount === 0) {
			return res.status(400).json({ message: 'Invalid ID or password' });
		}
		console.log('fffff');

		const user = checkIdResult.rows[0];
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return res.status(400).json({ message: 'Invalid ID or password' });
		}

		return res.status(200).json({
			message: 'Login successful',
			adminId: user.id,
			name: user.name,
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: 'Internal server error' });
	}
};
