import React, { Component } from 'react';
import SideBar from '../side-bar/side-bar'
import TopToolbar from '../top-toolbar/top-toolbar'

class Page extends Component {

	render() {
		const { children, title } = this.props;

		return (
			<div className='page'>
				<div className="topbar-container">
					<TopToolbar />
				</div>
				<div className="side-bar-container">
					<SideBar/>
				</div>
				<div className="main">
					{children}
				</div>
			</div>
		);
	}
}



export default Page;