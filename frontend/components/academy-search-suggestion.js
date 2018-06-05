import React from 'react';
import Heading from 'grommet/components/Heading';
import Value from 'grommet/components/Value';
import UserIcon from 'grommet/components/icons/base/User';

function AcademySearchSuggestion(props) {
	const {avatar_url, name, country, postcode, members_using_academy} = props.data;

	return <div className='container'>

		<img src={avatar_url} alt="academy image" className='avatar-image'/>
		<div className="details-container">
			<div className="heading-container">
				<Heading uppercase={true}
								 tag='h4'
								 className='detail-heading'>
					{name}
				</Heading>
				<img className='flag' src={`http://www.countryflags.io/${country}/shiny/64.png`} alt={country}/>
			</div>

			<div className="users">
				<div className="user-group">
					<img className='user-img' src="/static/user.png" alt="user-img"/>
					<img className='user-img' src="/static/user.png" alt="user-img"/>
					<img className='user-img' src="/static/user.png" alt="user-img"/>
				</div>
				<div><span>and <Value value={members_using_academy}
															size="small"
															responsive={true}
															colorIndex='accent-1' /> other users train here.</span></div>
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
        width: 75px;
        height: 75px;
				margin-right: 1em;
        border-radius: 50%;
			}

			.details-container {
        display: flex;
        flex-direction: column;
			}

      .heading-container {
        display: flex;
        flex-direction: row;
				align-content: center;
      }

			.flag {
				margin: 0 0.5em;
        width: 22px;
        height: 22px;
			}

			.users {
				display: flex;
        align-items: center;
			}

			.user-group {
				position: relative;
        height: 25px;
        width: 50px;
        margin-right: 6px;
			}

      .user-img:nth-child(1) {
        position:absolute;
        top: 0;
        left: 0;
        z-index: 3;
      }

      .user-img:nth-child(2) {
        position:absolute;
				top: 0;
				left: 12px;
        z-index: 2;
      }

      .user-img:nth-child(3) {
        position:absolute;
        top: 0;
        left: 24px;
				z-index: 1;
      }

      .user-img {
        border-radius: 50%;
        width: 25px;
        height: 25px;
        border: 3px solid white;
			}



		`}</style>
	</div>;
}


export default AcademySearchSuggestion;