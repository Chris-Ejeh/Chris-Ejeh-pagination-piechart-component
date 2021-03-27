import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Card({ currentPosts, loading }) {
	if (loading) {
		return <Text>Loading...</Text>;
	}

	return (
		<View style={styles.container}>
			{currentPosts.map((data) => (
				<TouchableOpacity key={data.id} style={styles.touch}>
					<Text style={styles.text}>{data.id}</Text>
					<Text style={styles.text}>{data.name}</Text>
					<Text style={styles.text}>{data.city}</Text>
					<Text style={styles.text}>{data.country}</Text>
					<Text style={styles.text}>{data.state}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#000',
	},
	touch: {
		borderWidth: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontWeight: '700',
		fontSize: 20,
		color: '#000',
	},
});

export default Card;
