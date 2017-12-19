import { ApolloClient, createNetworkInterface } from 'react-apollo'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
	global.fetch = fetch
}

const deployedUrl = 'https://08d7az07jh.execute-api.us-east-1.amazonaws.com/dev/query';
const local = 'http://localhost:3001/query'

function create () {
	const config = {
		ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
		networkInterface: createNetworkInterface({
			uri: deployedUrl, // Server URL (must be absolute)
			opts: { // Additional fetch() options like `credentials` or `headers`
				credentials: 'same-origin'
			}
		})
	}

	config.networkInterface.use([{
		applyMiddleware (req, next) {
			if (!req.options.headers) {
				req.options.headers = {}
			}
			// get the authentication token from local storage if it exists
			if (localStorage.getItem('access_token')) {
				req.options.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
			}
			next()
		},
	}])

	return new ApolloClient(config)
}

export default function initApollo () {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!process.browser) {
		return create()
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create()
	}

	return apolloClient
}