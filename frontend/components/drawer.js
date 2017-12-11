import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import withRoot from '../components/withRoot';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Typography from 'material-ui/Typography';

const drawerWidth = 240;

const styles = theme => ({
	text: {
		color: '#91a6bb'
	},
	title: {
		color: 'white'
	},
	drawerPaper: {
		position: 'fixed',
		height: '100vh',
		backgroundColor: '#222f3c',
		width: drawerWidth,
	},
	drawerHeader: {
		backgroundColor: '#1c2732',
		minHeight: '64px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
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

		return (
			<Drawer
				type="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor={anchor}
			>
				<div className={classes.drawerHeader}>
					<Typography
						type="headline"
						color="secondary"
						noWrap
						classes={{
							headline: classes.title,
						}}>
						Jiu-Jitsu Journal
					</Typography>
				</div>
				<Divider />
				<List>
					<ListItem button>
						<ListItemIcon classes={{
							root: classes.text,
						}}>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Inbox" classes={{
							text: classes.text,
						}} />
					</ListItem>
					<ListItem button>
						<ListItemIcon classes={{
							root: classes.text,
						}}>
							<DraftsIcon />
						</ListItemIcon>
						<ListItemText primary="Drafts" classes={{
							text: classes.text,
						}}/>
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button>
						<ListItemText primary="Trash" classes={{
							text: classes.text,
						}}/>
					</ListItem>
					<ListItem button component="a" href="#simple-list">
						<ListItemText primary="Spam" classes={{
							text: classes.text,
						}}/>
					</ListItem>
				</List>
			</Drawer>
		);
	}
}


export default withRoot(withStyles(styles)(DrawerMenu));