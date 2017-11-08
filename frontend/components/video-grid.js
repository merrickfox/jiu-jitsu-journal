import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'
import SingleVideo from './video'
import {fetchVideoFromId} from '../api/youtube-api'

class VideoGrid extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			youtube_data: null
		};
	}

	async componentWillReceiveProps(nextProps) {
		if (!nextProps.data.loading && nextProps.data.getTechniques) {
			const ids = nextProps.data.getTechniques.map((obj) => obj.youtube_id);

			const data = await fetchVideoFromId(ids);
			this.setState({
				youtube_data: data.items
			});
		}
	}

	render () {
		const {
			loading,
			getTechniques
		} = this.props.data;

		return (
			<div className="video-grid">
				{loading &&
					<div>Loading...</div>
				}

				{
					!loading &&
					getTechniques &&
					!getTechniques.length &&
					<div>Looks like we don't have any videos for that!</div>
				}


				{getTechniques &&
				this.state.youtube_data &&
				this.state.youtube_data.map(item => (
					<SingleVideo key={item.id} {...item} />
				))
				}


				{ /*language=SCSS*/ }
				<style jsx>{`

          @media (max-width: 400px) {
            .video-grid {
              flex-direction: column;
            }
          }

          .video-grid {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-start;
          }

				`}</style>
			</div>
		)
	}

}

const Techniques = gql`
  query techniques($position: String!, $dominance: String!, $technique_type: String!) {
  		getTechniques(position: $position, dominance: $dominance, technique_type: $technique_type) {
  			title,
				position,
				dominance,
				technique_type,
				youtube_id,
				upvotes
			}
  }
`;

/*TODO fix url params*/
export default graphql(Techniques, {
	options: ({ url: { query }, ...reduxState }) => ({ variables: { position: reduxState.position, dominance: reduxState.dominance, technique_type: reduxState.technique_type } })
})(VideoGrid);