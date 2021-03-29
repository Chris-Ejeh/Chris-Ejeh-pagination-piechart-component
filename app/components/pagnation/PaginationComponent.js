import React, { useEffect, useState } from 'react';
import {
	Dimensions,
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Card from './Card';

function PaginationComponent(props) {
	const [newData, setNewData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(5);
	const [selectedData, setSelectedData] = useState(1);

	//Pagination numbers
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(MyData.length / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	//Get data
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

	//Get Current Data
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = MyData.slice(indexOfFirstPost, indexOfLastPost);

	//Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Users</Text>
			<Card currentPosts={currentPosts} loading={loading} />

			<View style={styles.PaginationContainer}>
				{pageNumbers.map((number, index) => (
					<TouchableOpacity
						style={
							number === selectedData ? styles.selectedButton : styles.button
						}
						key={index}
						onPress={() => {
							setSelectedData(number);
							paginate(number);
						}}
					>
						<Text style={styles.number}>{number}</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		width: Dimensions.get('window').width,
		justifyContent: 'center',
	},
	text: {
		fontWeight: '700',
		fontSize: 30,
		padding: 10,
	},
	PaginationContainer: {
		padding: 10,
		marginBottom: 50,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	selectedButton: {
		borderRadius: 5,
		backgroundColor: '#898989',
		borderWidth: 1,
	},
	button: {
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#00000000',
	},
	number: {
		fontSize: 30,
		fontWeight: '400',
		paddingHorizontal: 15,
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
