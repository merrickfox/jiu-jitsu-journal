import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'
import Router from 'next/router'

class SingleVideo extends React.Component {

	render () {
		const {
			snippet
		} = this.props;

		return (
			<div className="single-video">
				<a href={`https://www.youtube.com/watch?v=${this.props.id}`}>
					<h4>{snippet.title}</h4>
					<img src={snippet.thumbnails.default.url} alt=""/>
				</a>

				{ /*language=SCSS*/ }
				<style jsx>{`

					h4 {
						margin: 8px 0;
					}
          .single-video {
            width: 32%;
            padding: 25px;
            text-align: center;
          }

				`}</style>
			</div>
		)
	}

}



export default SingleVideo;