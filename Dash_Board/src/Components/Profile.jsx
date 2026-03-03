import React from 'react';

function Profile() {
    const Admin = "Umesh Sarki"
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-2">
				<div className="h-16 w-16 bg-amber-100 rounded-3xl overflow-hidden">
					<img
						src="/profile.jpg"
						alt="User profile"
						className="h-100% w-100% object-cover"
					/>
				</div>

				<h1 className="text-2xl text-white">{Admin}</h1>
			</div>
		</>
	);
}

export default Profile;
