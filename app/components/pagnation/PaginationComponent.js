import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
//import Pagination, { Icon, Dot } from 'react-native-pagination';
import _ from 'lodash';
import colors from '../../config/colors';
import Card from './Card';
import Pagination from './Pagination';

function PaginationComponent(props) {
	const [newData, setNewData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(5);
	//const refs = useRef(null);

	const Value = '?results=20';

	var getData = async () => {
		try {
			setLoading(true);
			//const res = await axios.get('https://randomuser.me/api/' + Value);
			setNewData(MyData);
			setLoading(false);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	//Get Current Posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = MyData.slice(indexOfFirstPost, indexOfLastPost);

	//console.log(currentPosts);
	// //Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Users</Text>
			<Card currentPosts={currentPosts} loading={loading} />
			<TouchableWithoutFeedback
				style={{
					borderWidth: 1,
				}}
			>
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={MyData.length}
					paginate={paginate}
				/>
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
		flex: 1,
		top: 10,
		justifyContent: 'center',
		//alignItems: 'center',
	},
	text: {
		fontWeight: '700',
		fontSize: 30,
	},
});

export default PaginationComponent;

const MyData = [
	{
		id: 1,
		name: 'John',
		city: 'Halifax',
		country: 'Canada',
		stata: 'Nova Scotia',
	},
	{
		id: 2,
		name: 'Sam',
		city: 'Halifax',
		country: 'USA',
		stata: 'Nova Scotia',
	},
	{
		id: 136,
		name: 'Phil',
		city: 'Halifax',
		country: 'Jamacia',
		stata: 'Nova Scotia',
	},
	{
		id: 9647,
		name: 'King',
		city: 'Halifax',
		country: 'England',
		stata: 'Nova Scotia',
	},
	{
		id: 17485,
		name: 'King',
		city: 'Halifax',
		country: 'England',
		stata: 'Nova Scotia',
	},
	{
		id: 96933,
		name: 'Jack',
		city: 'Halifax',
		country: 'France',
		stata: 'Nova Scotia',
	},
	{
		id: 98745,
		name: 'King',
		city: 'Halifax',
		country: 'England',
		stata: 'Nova Scotia',
	},
	{
		id: 72933,
		name: 'Jack',
		city: 'Halifax',
		country: 'France',
		stata: 'Nova Scotia',
	},
	{
		id: 65517,
		name: 'Chris',
		city: 'Halifax',
		country: 'Mexico',
		stata: 'Nova Scotia',
	},
	{
		id: 98473,
		name: 'Johnny',
		city: 'Halifax',
		country: 'China',
		stata: 'Nova Scotia',
	},
	{
		id: 8217,
		name: 'Chris',
		city: 'Halifax',
		country: 'Mexico',
		stata: 'Nova Scotia',
	},
	{
		id: 5,
		name: 'Chris',
		city: 'Halifax',
		country: 'Mexico',
		stata: 'Nova Scotia',
	},
	{
		id: 14863,
		name: 'Johnny',
		city: 'Halifax',
		country: 'China',
		stata: 'Nova Scotia',
	},
	{
		id: 123,
		name: 'Tony',
		city: 'Halifax',
		country: 'Nigeria',
		stata: 'Nova Scotia',
	},
	{
		id: 136,
		name: 'Phil',
		city: 'Halifax',
		country: 'Jamacia',
		stata: 'Nova Scotia',
	},
	{
		id: 9647,
		name: 'King',
		city: 'Halifax',
		country: 'England',
		stata: 'Nova Scotia',
	},
	{
		id: 1745,
		name: 'King',
		city: 'Halifax',
		country: 'England',
		stata: 'Nova Scotia',
	},
	{
		id: 15933,
		name: 'Jack',
		city: 'Halifax',
		country: 'France',
		stata: 'Nova Scotia',
	},
	{
		id: 517,
		name: 'Chris',
		city: 'Halifax',
		country: 'Mexico',
		stata: 'Nova Scotia',
	},
	{
		id: 1473,
		name: 'Johnny',
		city: 'Halifax',
		country: 'China',
		stata: 'Nova Scotia',
	},
	{
		id: 98473,
		name: 'Johnny',
		city: 'Halifax',
		country: 'China',
		stata: 'Nova Scotia',
	},
	{
		id: 52217,
		name: 'Chris',
		city: 'Halifax',
		country: 'Mexico',
		stata: 'Nova Scotia',
	},
	{
		id: 845,
		name: 'Chris',
		city: 'Halifax',
		country: 'Mexico',
		stata: 'Nova Scotia',
	},
	{
		id: 9663,
		name: 'Johnny',
		city: 'Halifax',
		country: 'China',
		stata: 'Nova Scotia',
	},
];
