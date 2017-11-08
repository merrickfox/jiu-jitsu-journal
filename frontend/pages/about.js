import React from 'react'
import Page from '../components/page'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

class About extends React.Component {

	render () {
		return <Page>
			This is the about page!
		</Page>
	}

}

export default withRedux(initStore, null, null)(About)