import Header from './header'
import Meta from './meta'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
	networkInterface: createNetworkInterface({ uri: 'http://localhost:3001/graphql'}),
});

export default ({ children }) => (
	<ApolloProvider client={client}>
		<div className="main">
			<Meta />
			<Header />

			<div className="page">
				{ children }
			</div>
			{ /*language=SCSS*/ }
			<style jsx>{`
				.main {
					width: 85%;
					margin: auto;
					padding: 10px 0 0 0;
				}
				.page {
					color: #828282;
					background: #fff;
					padding: 3px 10px;
				}
				@media (max-width: 750px) {
					.main {
						padding: 0;
						width: auto;
					}
				}
			`}</style>
		</div>
	</ApolloProvider>
)