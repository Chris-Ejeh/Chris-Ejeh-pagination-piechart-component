import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import colors from '../config/colors';

function Card({
	ticker,
	tickerName,
	priceValue,
	marketChange,
	changePercent,
	imageUrl,
	sentiment,
	Username,
	analysisType,
}) {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<View style={styles.tickerContainer}>
					<Text style={styles.ticker}>{ticker}</Text>
					<Text style={styles.tickerName}>{tickerName}</Text>
					<View style={styles.pricePercentContainer}>
						<View style={styles.priceContainer}>
							<Text style={styles.priceTitle}>price</Text>
							<Text style={styles.priceValue}>
								{Math.round(priceValue * 1000) / 100}
							</Text>
						</View>
						<View style={styles.percentContainer}>
							<Text style={styles.marketChange}>{marketChange}</Text>
							<Text style={styles.changePercent}>
								{Math.round(changePercent * 10000) / 100}%
							</Text>
						</View>
					</View>
					<View style={styles.sentimentContainer}>
						<Text style={styles.sentiment}>{sentiment}</Text>
					</View>
					<Text style={styles.return}>{-0.99}%</Text>
				</View>
				<View style={styles.feedContainer}>
					<Image source={imageUrl} style={styles.image} />
					<Text style={styles.analysisType}>{analysisType}</Text>
					<Text style={styles.heading}>
						LAC - America Is Securing Their Supply of Lithium And LAC Owns The
						Largest Reserve In America
					</Text>

					<Text style={styles.username}>{Username}</Text>
					<View style={styles.dateContainer}>
						<Text style={styles.posted}>Posted</Text>
						<Text style={styles.postedDate}>Yesterday at 5:30 PM</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 200,
		padding: 5,
		justifyContent: 'center',
	},
	tickerContainer: {
		backgroundColor: colors.black,
		height: '100%',
		width: '30%',
	},
	ticker: {
		color: colors.white,
		marginTop: 10,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	tickerName: {
		color: colors.grey,
		marginBottom: 10,
		fontSize: 13,
		textAlign: 'center',
	},
	pricePercentContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
	},
	priceContainer: {
		marginRight: 5,
		marginBottom: 10,
	},
	priceTitle: {
		color: colors.white,
		fontSize: 15,
		textAlign: 'center',
	},
	priceValue: {
		color: colors.white,
		marginBottom: 10,
		fontSize: 15,
		textAlign: 'center',
	},
	marketChange: {
		color: colors.green,
		fontSize: 15,
		textAlign: 'center',
	},
	changePercent: {
		color: colors.green,
		fontSize: 15,
		textAlign: 'center',
	},
	sentimentContainer: {
		borderWidth: 2,
		borderColor: colors.green,
		borderRadius: 5,
		width: 60,
		alignSelf: 'center',
		marginBottom: 10,
	},
	sentiment: {
		color: colors.green,
		textAlign: 'center',
	},
	return: {
		color: colors.green,
		textAlign: 'center',
	},
	feedContainer: {
		backgroundColor: colors.grey,
		height: '100%',
		padding: 10,
		width: '60%',
	},
	analysisType: {
		fontWeight: 'bold',
		color: colors.medium,
		marginBottom: 10,
	},
	heading: {
		fontSize: 17,
		marginBottom: 20,
	},
	username: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	dateContainer: {
		flexDirection: 'row',
	},
	posted: {
		fontWeight: 'bold',
		marginRight: 5,
	},
	postedDate: {},
});

export default Card;
