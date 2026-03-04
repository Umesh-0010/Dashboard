import { useState } from 'react';
import { registerUser, loginUser } from '../../config/Axcious';
import { useNavigate } from 'react-router-dom';

function SignIn() {
	const navigate = useNavigate();
	const [isLogin, setIsLogin] = useState(false);

	const [loginData, setLoginData] = useState({
		id: '',
		password: '',
	});

	const [registerData, setRegisterData] = useState({
		id: '',
		name: '',
		password: '',
	});

	const handleLoginChange = (e) => {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value,
		});
	};

	const handleRegisterChange = (e) => {
		if (e.target.type === 'file') {
			setRegisterData({
				...registerData,
				file: e.target.files[0],
			});
		} else {
			setRegisterData({
				...registerData,
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleLoginSubmit = async (e) => {
		e.preventDefault();

		try {
			const data = await loginUser(loginData);
			alert('Login successfully ' + data.name);
			console.log('Product added successfully:', data);

			setLoginData({
				id: '',
				password: '',
			});
			navigate('/')
		} catch (error) {
			console.error('Error adding product:', error);
		}
	};

	const handleRegisterSubmit = async (e) => {
		e.preventDefault();
		try {
			await registerUser(registerData);
			alert('Register Success');

			setRegisterData({
				id: '',
				name: '',
				password: '',
			});
			navigate('/')

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex items-center justify-center gap-8 h-screen w-full p-8 bg-black/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<div className="w-full max-w-md bg-blue-600 rounded-3xl p-8 shadow-2xl">
				{isLogin ? (
					<form
						onSubmit={handleLoginSubmit}
						className="flex flex-col gap-5">
						<h1 className="text-3xl font-extrabold text-white text-center">
							Login
						</h1>

						<input
							type="number"
							name="id"
							value={loginData.id}
							onChange={handleLoginChange}
							placeholder="Enter ID"
							className="rounded-lg p-3 bg-amber-50 outline-none"
						/>

						<input
							type="password"
							name="password"
							value={loginData.password}
							onChange={handleLoginChange}
							placeholder="Enter Password"
							className="rounded-lg p-3 bg-amber-50 outline-none"
						/>

						<button
							type="submit"
							className="bg-blue-900 text-white py-3 rounded-lg active:scale-95 transition font-semibold">
							Login
						</button>

						<p
							onClick={() => setIsLogin(false)}
							className="text-center text-white text-sm cursor-pointer hover:underline">
							Don't have an account? Register
						</p>
					</form>
				) : (
					<form
						onSubmit={handleRegisterSubmit}
						className="flex flex-col gap-5">
						<h1 className="text-3xl font-extrabold text-white text-center">
							Register
						</h1>

						<input
							type="number"
							name="id"
							value={registerData.id}
							onChange={handleRegisterChange}
							placeholder="Enter ID"
							className="rounded-lg p-3 bg-amber-50 outline-none"
						/>

						<input
							type="text"
							name="name"
							value={registerData.name}
							onChange={handleRegisterChange}
							placeholder="Enter Name"
							className="rounded-lg p-3 bg-amber-50 outline-none"
						/>

						<input
							type="password"
							name="password"
							value={registerData.password}
							onChange={handleRegisterChange}
							placeholder="Enter Password"
							className="rounded-lg p-3 bg-amber-50 outline-none"
						/>

						<button
							type="submit"
							className="bg-blue-900 text-white py-3 rounded-lg active:scale-95 transition font-semibold">
							Register
						</button>

						<p
							onClick={() => setIsLogin(true)}
							className="text-center text-white text-sm cursor-pointer hover:underline">
							Already have an account? Login
						</p>
					</form>
				)}
			</div>
		</div>
	);
}

export default SignIn;
