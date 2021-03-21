import { create } from 'apisauce';
//import axios from 'axios';

const apiClient = create({
	baseURL: 'https://beta.api.utradea.com/main-feed',
	headers: {
		Authorization:
			'NJhm{z-lc:lCa#q|0{Z[u%EF)2lwi,3hxSbpzU0uk>RqLFmD4HM@^|(P7!`GZ/Z%',
	},
});

export default apiClient;
