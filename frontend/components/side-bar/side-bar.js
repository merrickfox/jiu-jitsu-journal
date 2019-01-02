import '../../styles/global.scss'
import './side-bar.scss'
import React from 'react';
import Auth from '../../lib/auth0';
import Logo from "../logo";


class SideBar extends React.Component {



	login = () => {
		const auth = new Auth();
		auth.login();
	}

	render() {

		return (
			<section className="side-bar">
				<div className="logo-container">
					<Logo/>
					<h3>JiuJitsu Journal</h3>
				</div>

				<div className="user">
					<div className="circle">
						<div className="name">MF</div>
					</div>
				</div>

				<ul>
					<li>
						<i className="fa fa-tachometer" aria-hidden="true"></i>
						<h5>Dashboard</h5>
					</li>
					<li>
						<i className="fa fa-heartbeat" aria-hidden="true"></i>
						<h5>Activities</h5>
					</li>
				</ul>
			</section>
		);
	}
}


export default SideBar;