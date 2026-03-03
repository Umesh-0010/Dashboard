import Aside from '../Components/Aside';
import Main from '../Components/Main';

function DashBoard() {
	return (
		<div className="h-screen w-100% flex  ">
			<Aside />
			<Main />
		</div>
	);
}

export default DashBoard;
