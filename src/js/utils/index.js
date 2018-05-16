import jwtDecode from 'jwt-decode';

export function isTokenValid() {
	const token = localStorage.getItem('token');
	console.log('this is token from utils', token);
	if (token) {
		const decoded = jwtDecode(token);
		return decoded.exp > Date.now() / 1000;
	}
}
