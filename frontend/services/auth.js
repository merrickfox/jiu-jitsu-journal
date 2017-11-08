import auth0 from 'auth0-js';
import Router from 'next/router'

export default class Auth {
	auth0 = new auth0.WebAuth({
		domain: 'jiujitsujournal.eu.auth0.com',
		clientID: 'DNqeAfe7Oi4-Drcb2CCJOsLAT-Rs21Qn',
		redirectUri: 'http://localhost:3000/callback',
		audience: 'https://jiujitsujournal.eu.auth0.com/userinfo',
		responseType: 'token id_token',
		scope: 'openid'
	});

	login() {
		this.auth0.authorize();
	}

	handleAuthentication() {
		this.auth0.parseHash((err, authResult) => {
			if (authResult && authResult.accessToken && authResult.idToken) {
				this.setSession(authResult);
				Router.push({
					pathname: '/'
				});
			} else if (err) {
				Router.push({
					pathname: '/'
				});
				console.log(err);
			}
		});
	}

	setSession(authResult) {
		// Set the time that the access token will expire at
		let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
		localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem('id_token', authResult.idToken);
		localStorage.setItem('expires_at', expiresAt);
		// navigate to the home route
		history.replace('/home');
	}

	logout() {
		// Clear access token and ID token from local storage
		localStorage.removeItem('access_token');
		localStorage.removeItem('id_token');
		localStorage.removeItem('expires_at');
		// navigate to the home route
		Router.push({
			pathname: '/'
		});
	}

	isAuthenticated() {
		// Check whether the current time is past the
		// access token's expiry time
		let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}
}