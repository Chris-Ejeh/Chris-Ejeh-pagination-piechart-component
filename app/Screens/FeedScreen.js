import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import client from '../api/client';

import {
	SafeAreaView,
	StyleSheet,
	StatusBar,
	Text,
	FlatList,
	View,
} from 'react-native';
import Card from '../components/Card';

function FeedScreen(props) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);

	const getFeed = async () => {
		const response = await client.get(
			'/get-public-main-feed?hot=true' + toString(),
		);

		setError(!response.ok);
		setData(response.data);
		//console.log(error);
		//console.log(data);
		return response;
	};

	useEffect(() => {
		getFeed();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" />
			<FlatList
				data={data.completeFeed}
				nestedScrollEnabled
				keyExtractor={(ticker) => ticker._id.toString()}
				renderItem={({ item }) => (
					<View>
						<Card ticker={item.ticker} tickerName={item.Name} />
					</View>
				)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
	text: {
		fontSize: 30,
	},
});

export default FeedScreen;
