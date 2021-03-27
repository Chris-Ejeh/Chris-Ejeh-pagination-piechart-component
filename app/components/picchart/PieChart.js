import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import { VictoryPie } from 'victory-native';

let colorArray = ['#4E1ABB', '#2197EC', '#1A51BB', '#454545'];
const fontFamily = '"Montserrat", -apple-system, Helvetica, Arial, sans-serif';
const fontSize = 14;

function PieChart({ data, length, sectorType }) {
	const [topDisplay, setTopDisplay] = useState([]);

	useEffect(() => {
		//let colorArray = ['#4E1ABB', '#2197EC', '#1A51BB', '#454545'];
		const getSectorIndustry = (input) => {
			if (!Array.isArray(input)) {
				return null;
			}

			let sortedList = input
				.sort((a, b) => {
					return a.count - b.count;
				})
				.reverse()
				.slice(0, 3);

			// Get Other Percentage
			var totalValue = length;
			sortedList.map((el) => {
				return (totalValue = totalValue - el.count);
			});
			let percentList = sortedList.map((el, index) => {
				el['title'] = el.name;
				el['value'] = el.count;
				el['color'] = colorArray[index];
				return el;
			});

			percentList = [
				...percentList,
				{
					title: 'Other',
					value: totalValue,
					color: colorArray[3],
				},
			];

			return percentList;
		};

		let renderTopDisplay = getSectorIndustry(data, length);
		setTopDisplay(renderTopDisplay);
	}, [data, length]);

	const truncTitle = (title, length) => {
		let newTitle;
		try {
			newTitle = title.substring(0, length);
			if (newTitle.length === title.length) {
				return title;
			} else {
				return newTitle + '...';
			}
		} catch {
			return title;
		}
	};

	const getNested = (obj, ...args) => {
		return args.reduce((obj, level) => obj && obj[level], obj);
	};

	const getIndustryRow = (array, length, item, color) => {
		let title = truncTitle(getNested(array, item, 'title'), 60);
		if (typeof title === 'undefined') {
			return null;
		}
		try {
			let percentage = (array[item].value / length) * 100;
			return (
				<View
					style={{
						borderColor: color,
						borderStyle: 'solid',
						borderLeftWidth: 7,
						marginBottom: 5,
					}}
				>
					<Text
						style={{
							fontSize: 15,
							fontWeight: '300',
							width: '100%',
							textAlign: 'left',
							paddingLeft: 10,
							color: '#c3c3c3',
							marginVertical: 5,
						}}
					>
						{percentage.toFixed(0) + '%'} - {title}
					</Text>
				</View>
			);
		} catch {
			return null;
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}> Top Sectors</Text>
			{length > 0 ? (
				<>
					<View style={styles.industryRootView}>
						<View style={styles.industryInnerView}>
							<VictoryPie
								data={topDisplay}
								//x="sectors"
								y="count"
								width={230}
								height={230}
								innerRadius={87}
								colorScale={colorArray}
								style={{
									fontFamily:
										'Montserrat, -apple-system, Helvetica, Arial, sans-serif',
									fontSize: 8,
									labels: {
										fill: null,
										fontSize: 15,
										padding: 7,
										//fill: '#fff',
									},
								}}
							/>
						</View>

						<View style={styles.industryPieInner}>
							<Text style={styles.industryPieTop}>
								{data.length.toString()}
							</Text>
							<Text style={styles.industryPieBottom}>
								Total {sectorType ? 'Sectors' : 'Industries'}
							</Text>
						</View>

						<View style={styles.industryTextView}>
							{getIndustryRow(topDisplay, length, '0', colorArray[0])}
							{getIndustryRow(topDisplay, length, '1', colorArray[1])}
							{getIndustryRow(topDisplay, length, '2', colorArray[2])}
						</View>
					</View>
				</>
			) : (
				<View>
					{/* <img
						src={`/assets/images/error/data-not-avail.svg`}
						alt="missing-data-icon"
						className={'sectory-indstry-blank'}
					/> */}
					{/* <Text style={styles.industryPieTop}>
						There's no {sectorType ? 'Sector' : 'Industry'} information. Add
						some items to your portfolio to start tracking.
					</Text> */}
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		height: '100%',
		width: '100%',
		padding: 30,
		backgroundColor: '#161616',
		// justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'column',
	},
	title: {
		fontWeight: '500',
		fontSize: 30,
		marginTop: 15,
		marginBottom: 20,
		marginLeft: 10,
		width: 220,
		color: '#dedede',
	},
	industryRootView: {
		marginBottom: 20,
		width: '100%',
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		display: 'flex',
	},
	industryInnerView: {
		marginBottom: 20,
		width: 150,
		height: 150,
		marginBottom: 20,
		marginLeft: 10,
	},
	industryPieInner: {
		width: 70,
		marginTop: 50,
		right: 70,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		display: 'flex',
	},
	industryPieTop: {
		fontWeight: '400',
		fontSize: 42,
		color: '#cecece',
		textAlign: 'center',
	},
	industryPieBottom: {
		fontWeight: '400',
		fontSize: 20,
		width: 80,
		color: '#ccc',
		textAlign: 'center',
		lineHeight: 20,
	},
	industryTextView: {
		flexGrow: 1,
		top: 30,
		width: 200,
	},
});

export default PieChart;
