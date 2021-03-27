import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import colors from '../../config/colors';

TouchableOpacity.defaultProps = { activeOpacity: 0.2 };

function Pagination({ totalPosts, postsPerPage, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<View style={styles.container}>
			{pageNumbers.map((number) => (
				<TouchableOpacity
					key={number}
					style={styles.touch}
					onPress={() => paginate(number)}
				>
					<Text style={styles.text}>{number}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: 'row',
		marginBottom: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	touch: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
	},
	text: {
		fontSize: 30,
		fontWeight: '400',
		paddingHorizontal: 15,
	},
});
export default Pagination;
