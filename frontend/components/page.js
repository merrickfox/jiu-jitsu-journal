import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import DrawerMenu from '../components/drawer'
import TopToolbar from '../components/top-toolbar'

const drawerWidth = 240;

const styles = theme => ({
	root: {
		width: '100%',
		zIndex: 1,
		overflow: 'hidden',
	},
	appFrame: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	content: {
		background: theme.palette.background.default,
		width: '100%',
		padding: theme.spacing.unit * 3,
		height: 'calc(100% - 56px)',
		marginTop: 56,
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			height: 'calc(100% - 64px)',
			marginTop: 64,
		},
	},
});


class Page extends Component {

	render() {
		const { classes, children } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<TopToolbar/>
					<DrawerMenu/>
					<main className={classes.content}>
						{children}
					</main>
				</div>
			</div>
		);
	}
}



export default withRoot(withStyles(styles)(Page));