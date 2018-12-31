import '../../styles/global.scss'
import './page.scss'
import React, { Component } from 'react';
import SideBar from '../side-bar/side-bar'
import TopToolbar from '../top-toolbar/top-toolbar'

class Page extends Component {

	render() {
		const { children, title } = this.props;

		return (
			<div className='app-container'>
				<TopToolbar />
				<div className="side-bar-container">
					<SideBar/>
				</div>
				<div className="main">
					<h1>This is a h1 title</h1>
					<h2>This is a h2 title</h2>
					<h3>This is a h3 title</h3>
					<h4>This is a h4 title</h4>
					<h5>This is a h5 title</h5>
					<h6>This is a h6 title</h6>
					{children}
				</div>
			</div>
		);
	}
}



export default Page;