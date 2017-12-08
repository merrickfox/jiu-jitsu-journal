import Header from './header'
import Meta from './meta'
import DrawerMenu from './drawer'
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
			<DrawerMenu/>
			<div className="page">
				{ children }
			</div>
			{ /*language=SCSS*/ }
			<style jsx>{`
				.main {
					display: flex;
				}
				.page {
          width: 100%;
          padding: 10px 0 0 0;
          margin-top: 64px;
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