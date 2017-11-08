import React from 'react'
import Page from '../components/page'
import VideoGrid from '../components/video-grid'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'


class Techniques extends React.Component {
	render () {
		return(
			<Page>
				<VideoGrid {...this.props}/>
			</Page>
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

export default withRedux(initStore, mapStateToProps, null)(Techniques)