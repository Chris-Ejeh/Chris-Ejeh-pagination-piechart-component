import React from 'react';
import PieChart from './PieChart';

const infoData = [
	{ name: 'Manufacturing', count: 0.5 },
	{ name: 'Technology', count: 1.1 },
	{ name: 'Information', count: 0.8 },
	{ name: 'Health Care', count: 1.2 },
	{ name: 'Materials', count: 1.5 },
];

function PortfolioComponent() {
	return <PieChart data={infoData} length={infoData.length} sectorType />;
}

export default PortfolioComponent;
