import React from 'react';
import RoundedAvatar from '../rounded-avatar/rounded-avatar';


function AcademySearchSuggestion(props) {
	const {avatar_url, name, country, postcode, members_using_academy} = props.data;

	return <div className='academy-search-suggestion'>

		<RoundedAvatar
			imageUrl={avatar_url}
			alt="academy image"
			size="regular"
		/>
		<div className="details-container">
			<div className="heading-container">
				<h4>
					{name}
				</h4>
				<img className='flag' src={`http://www.countryflags.io/${country}/shiny/64.png`} alt={country}/>
			</div>

			<div className="users">
				<div className="user-group">
					<img className='user-img' src="/static/user.png" alt="user-img"/>
					<img className='user-img' src="/static/user.png" alt="user-img"/>
					<img className='user-img' src="/static/user.png" alt="user-img"/>
				</div>
				<div><span>and {members_using_academy} other users train here.</span></div>
			</div>

		</div>
	</div>;
}


export default AcademySearchSuggestion;