const AuthenticationClient = require('auth0').AuthenticationClient;

const auth0 = new AuthenticationClient({
	domain: 'jiujitsujournal.eu.auth0.com',
	clientId: 'DNqeAfe7Oi4-Drcb2CCJOsLAT-Rs21Qn',
});


export default function getUser (token) {
	return auth0.users.getInfo(token);

}