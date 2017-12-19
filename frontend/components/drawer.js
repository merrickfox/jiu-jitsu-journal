import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import withRoot from '../components/withRoot';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import DashboardIcon from 'material-ui-icons/Dashboard';
import PersonIcon from 'material-ui-icons/Person';
import Router from 'next/router'
import Typography from 'material-ui/Typography';
import autobind from 'autobind-decorator';
import Auth from '../lib/auth0';

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

	@autobind
	login () {
		const auth = new Auth();
		auth.login();
	}

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
					<ListItem button onClick={this.login}>
						<ListItemIcon classes={{
							root: classes.text,
						}}>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary="Login" classes={{
							text: classes.text,
						}} />
					</ListItem>
					<ListItem button onClick={() => Router.push('/dashboard')}>
						<ListItemIcon classes={{
							root: classes.text,
						}}>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="My Dashboard" classes={{
							text: classes.text,
						}} />
					</ListItem>
				</List>
				<Divider />
			</Drawer>
		);
	}
}


export default withRoot(withStyles(styles)(DrawerMenu));