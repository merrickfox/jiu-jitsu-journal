import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import withRoot from '../components/withRoot';

const drawerWidth = 240;
const styles = theme => ({

	appBar: {
		position: 'fixed',
		width: `calc(100% - ${drawerWidth}px)`,
	},
	'appBar-left': {
		marginLeft: drawerWidth,
	},
});

class TopToolbar extends React.Component {
	state = {
		anchor: 'left',
	};

	render() {
		const { classes } = this.props;
		const { anchor } = this.state;

		return (

			<AppBar className={classNames(classes.appBar, classes[`appBar-${anchor}`])}>
				<Toolbar>
					<Typography type="title" color="inherit" noWrap>
						Yolo
					</Typography>
				</Toolbar>
			</AppBar>

		);
	}
}


export default withRoot(withStyles(styles)(TopToolbar));