import '../../styles/global.scss'
import './side-bar.scss'
import React from 'react';
import Auth from '../../lib/auth0';


class SideBar extends React.Component {



	login = () => {
		const auth = new Auth();
		auth.login();
	}

	render() {

		return (
			<section className="side-bar">
				<ul>
					<li>

					</li>
					<li>

					</li>
				</ul>
			</section>
		);
	}
}


export default SideBar;