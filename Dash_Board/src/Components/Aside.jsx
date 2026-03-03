import Navbar from './Navbar';
import Profile from './Profile';

function Aside() {
	return (
		<div className="w-1/4 bg-blue-600 flex flex-col justify-between items-start p-5">
			<div className="flex flex-col w-full">
				<div className="text-3xl tracking-tight font-bold ml-2 text-white">
					Dashboard
				</div>

				<hr className="border-2 border-black w-full rounded-3xl mt-3" />

				<Navbar />
			</div>

			<Profile />
		</div>
	);
}

export default Aside;
