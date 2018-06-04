import React from 'react';
import Heading from 'grommet/components/Heading';
import BrandGrommetOutlineIcon from 'grommet/components/icons/base/BrandGrommetOutline';

function AcademySearchSuggestion(props) {
	const {avatar_url, name, country, postcode, members_using_academy} = props.data;
	console.log('url', avatar_url)

	return <div className='container'>

		<img src={avatar_url} alt="academy image" className='avatar-image'/>
		<div className="details-container">
			<div className="detail">
				<Heading uppercase={true}
								 tag='h5'
								 className='detail-heading'>
					Academy Name:
				</Heading>
				<span className="text">{name}</span>
			</div>

			<div className="divider"><BrandGrommetOutlineIcon size='xsmall' /></div>

			<div className="detail">
				<Heading uppercase={true}
								 tag='h5'>
					Country:
				</Heading>
				<span className="text">{country}</span><img className='flag' src={`http://www.countryflags.io/${country}/shiny/64.png`} alt=""/>
			</div>

			<div className="detail">
				<Heading uppercase={true}
								 tag='h5'
								 className='detail-heading'>
					Postal Code:
				</Heading>
				<span className="text">{postcode}</span>
			</div>

			<div className="divider"><BrandGrommetOutlineIcon size='xsmall' /></div>

			<div className="detail">
				<Heading uppercase={true}
								 tag='h5'
								 className='detail-heading'>
					People using this academy:
				</Heading>
				<span className="text">{members_using_academy}</span>
			</div>

			<div className="divider"><BrandGrommetOutlineIcon size='xsmall' /></div>
		</div>

		{ /*language=CSS*/ }
		<style jsx  >{`
			.container {
				display: flex;
				flex-direction: row;
				padding: 1em;
			}

			.avatar-image {
        width: 75px;
        height: 75px;
				margin-right: 1em;
        border-radius: 50%;
			}

			.details-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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

			.divider {
				margin: 0 0.5em;
			}

			.text {
        line-height: 1.375;
			}

		`}</style>
	</div>;
}


export default AcademySearchSuggestion;