import React from 'react'
import Page from '../components/page'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'


class Dashboard extends React.Component {

	constructor () {
		super();
	}

	render () {
		return(
			<div>
				<Page>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
					<div>dashboard</div>
				</Page>

				<style jsx>{`

				`}</style>
			</div>
		)
	}

}


const mapStateToProps = state => {
	return {
		position: state.position,
		dominance: state.dominance,
		technique_type: state.technique_type,
	};
};

export default withRedux(initStore, mapStateToProps, null)(Dashboard)