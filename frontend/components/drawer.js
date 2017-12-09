/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		width: '100%',
		height: 430,
		marginTop: theme.spacing.unit * 3,
		zIndex: 1,
		overflow: 'hidden',
	},
	appFrame: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: '100%',
	},
	appBar: {
		position: 'absolute',
		width: `calc(100% - ${drawerWidth}px)`,
	},
	'appBar-left': {
		marginLeft: drawerWidth,
	},
	'appBar-right': {
		marginRight: drawerWidth,
	},
	drawerPaper: {
		position: 'relative',
		height: '100%',
		width: drawerWidth,
	},
	drawerHeader: theme.mixins.toolbar,
	content: {
		backgroundColor: theme.palette.background.default,
		width: '100%',
		padding: theme.spacing.unit * 3,
		height: 'calc(100% - 56px)',
		marginTop: 56,
		[theme.breakpoints.up('sm')]: {
			height: 'calc(100% - 64px)',
			marginTop: 64,
		},
	},
});

class DrawerMenu extends React.Component {
	state = {
		anchor: 'left',
	};

	handleChange = event => {
		this.setState({
			anchor: event.target.value,
		});
	};

	render() {
		const { classes } = this.props;
		const { anchor } = this.state;



		let before = null;
		let after = null;

		return (
			<Drawer
				type="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor={anchor}
			>
				<div className={classes.drawerHeader}>JiuJitsu Journal</div>
				<Divider />
				<List>
					<ListItem button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Inbox" />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<DraftsIcon />
						</ListItemIcon>
						<ListItemText primary="Drafts" />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button>
						<ListItemText primary="Trash" />
					</ListItem>
					<ListItem button component="a" href="#simple-list">
						<ListItemText primary="Spam" />
					</ListItem>
				</List>
			</Drawer>
		);
	}
}


export default withStyles(styles)(DrawerMenu);