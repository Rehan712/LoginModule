import axios from 'axios';

export async function getDataApi() {
	const token = localStorage.getItem('token');
	try {
		const response = await axios.get('/students', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		return response.data;
	} catch (e) {
		console.log('this is error from getDataApi', e);
	}
}

export async function submitDataApi(inputData) {
	try {
		const res = axios.post('/loginConfirmed', inputData);
		return res;
	} catch (e) {
		console.log('this is the error from submitDataApi ', e);
	}
}
