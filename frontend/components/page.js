import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import DrawerMenu from './drawer'
import TopToolbar from './top-toolbar'

const drawerWidth = 240;




class Page extends Component {

	render() {
		const { classes, children, title } = this.props;

		return (
			<div >
				<div >
					<TopToolbar title={title}/>
					<DrawerMenu/>
					<main >
						{children}
					</main>
				</div>
			</div>
		);
	}
}



export default Page;