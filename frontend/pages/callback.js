import React from 'react'
import Page from '../components/page'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Auth from '../services/auth'

class Callback extends React.Component {

	constructor (props) {
		super(props);
	}

	componentDidMount() {
		const auth = new Auth();
		if (/access_token|id_token|error/.test(window.location.hash)) {
			auth.handleAuthentication();
		}
	}

	render () {
		return <Page>
			Loading....
		</Page>
	}

}

export default withRedux(initStore, null, null)(Callback)