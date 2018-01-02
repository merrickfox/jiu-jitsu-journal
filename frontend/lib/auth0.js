import auth0 from 'auth0-js';

export default class Auth {
	auth0 = new auth0.WebAuth({
		domain: 'jiujitsujournal.eu.auth0.com',
		clientID: 'DNqeAfe7Oi4-Drcb2CCJOsLAT-Rs21Qn',
		redirectUri: 'http://localhost:3000/login',
		audience: 'https://jiujitsujournal.eu.auth0.com/userinfo',
		responseType: 'token id_token',
		scope: 'openid'
	});

	constructor() {
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
		this.isAuthenticated = this.isAuthenticated.bind(this);
	}

	handleAuthentication() {
		const promise = new Promise((resolve, reject) => {
			this.auth0.parseHash((err, authResult) => {
				if (authResult && authResult.accessToken && authResult.idToken) {
					this.setSession(authResult);
					resolve(true)
				} else if (err) {
					console.log(err);
					reject(err);
				}
			});
		})
		return promise;
	}

	setSession(authResult) {
		// Set the time that the access token will expire at
		let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
		localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem('id_token', authResult.idToken);
		localStorage.setItem('expires_at', expiresAt);
		// navigate to the home route
	}

	logout() {
		// Clear access token and ID token from local storage
		localStorage.removeItem('access_token');
		localStorage.removeItem('id_token');
		localStorage.removeItem('expires_at');
		// navigate to the home route
	}

	isAuthenticated() {
		// Check whether the current time is past the
		// access token's expiry time
		let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}

	getTokens () {
		return {
			access_token: localStorage.getItem('access_token'),
			id_token: localStorage.getItem('id_token'),
		}
	}

	getUserInfo () {
		const tokens = this.getTokens();
		const promise = new Promise((resolve, reject) => {
			this.auth0.client.userInfo(tokens.access_token, function(err, user) {
				if (err) {
					reject(err)
				} else {
					resolve(user);
				}
			});
		});


		return promise;
	}

	formatAuth0UserObject (user) {
		let formattedUser = {};
		formattedUser.id = user.sub;

		Object.entries(user).forEach(([key, value]) => {
			if (key.includes('http')) {
				const newKey = key.split('custom-data/')[1];
				formattedUser[newKey] = value;
			}
		});

		return formattedUser;
	}

	login() {
		//remove this logic after redux etc
		if (this.isAuthenticated()) {
			this.logout();
		} else {
			this.auth0.authorize();
		}

	}
}