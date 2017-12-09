import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import withRoot from '../components/withRoot';

const drawerWidth = 240;

const styles = theme => ({
	drawerPaper: {
		position: 'fixed',
		height: '100vh',
		width: drawerWidth,
	},
	drawerHeader: theme.mixins.toolbar,
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
				<div className={classes.drawerHeader} />
				<Divider />
				<List>some list</List>
				<Divider />
				<List>some list 2</List>
			</Drawer>
		);
	}
}


export default withRoot(withStyles(styles)(DrawerMenu));