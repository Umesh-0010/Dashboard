import React from 'react';
import { Line } from 'react-chartjs-2';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

function LineGraph() {
	const salesData = [
		{ id: 1, day: 'Monday', sales: 120, loss: 30 },
		{ id: 2, day: 'Tuesday', sales: 200, loss: 50 },
		{ id: 3, day: 'Wednesday', sales: 150, loss: 20 },
		{ id: 4, day: 'Thursday', sales: 300, loss: 70 },
		{ id: 5, day: 'Friday', sales: 250, loss: 40 },
		{ id: 6, day: 'Saturday', sales: 400, loss: 60 },
		{ id: 7, day: 'Sunday', sales: 180, loss: 25 },
	];

	const chartData = {
		labels: salesData.map((item) => item.day),
		datasets: [
			{
				label: 'Daily Sales',
				data: salesData.map((item) => item.sales),
				borderColor: 'rgba(75, 192, 192, 1)',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				tension: 0.3,
			},
			{
				label: 'Daily Loss',
				data: salesData.map((item) => item.loss),
				borderColor: 'rgba(255, 99, 132, 1)',
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				tension: 0.3,
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
	};

	return (
		<div className="flex h-full items-center justify-center rounded-2xl bg-white shadow-lg shadow-gray-500/50 p-4">
			{/* Set a height for the container if it's not expanding properly */}
			<div style={{ height: '300px', width: '100%' }}>
				<Line
					data={chartData}
					options={options}
				/>
			</div>
		</div>
	);
}

export default LineGraph;
