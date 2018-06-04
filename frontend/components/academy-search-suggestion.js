import React from 'react';
import Heading from 'grommet/components/Heading';

function AcademySearchSuggestion(props) {
	const {avatar_url, name, country} = props.data;
	console.log('url', avatar_url)

	return <div className='container'>

		<img src={avatar_url} alt="academy image" className='avatar-image'/>
		<div className="details-container">
			<div className="detail">
				<Heading uppercase={true}
								 tag='h4'
								 className='detail-heading'>
					Academy Name:
				</Heading>
				<span>{name}</span>
			</div>

			<div className="detail">
				<Heading uppercase={true}
								 tag='h4'>
					Country:
				</Heading>
				<span>{country}</span><img className='flag' src="http://www.countryflags.io/GB/shiny/64.png" alt=""/>
			</div>
		</div>

		{ /*language=CSS*/ }
		<style jsx  >{`
			.container {
				display: flex;
				flex-direction: row;
				padding: 1em;
			}

			.avatar-image {
        width: 100px;
        height: 100px;
				margin-right: 1em;
			}

			.details-container {
        display: flex;
        flex-direction: column;
			}

			.detail {
				display: flex;
				align-content: center;
			}

			.flag {
        width: 23px;
        height: 23px;
        margin: 0 0.5em;
			}

			.detail-heading {
				color: lightslategray;
			}

		`}</style>
	</div>;
}


export default AcademySearchSuggestion;