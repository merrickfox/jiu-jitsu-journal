import Nav from './nav'
import Link from 'next/link'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { autobind } from 'core-decorators';
import Auth from '../services/auth';

const styles = theme => ({
	root: {
		marginTop: theme.spacing.unit * 3,
		width: '100%',
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
});

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.auth = new Auth();
	}
	
	@autobind
	login () {
		this.auth.login();
	}

	render () {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						<Typography type="title" color="inherit" className={classes.flex}>
							Title
						</Typography>
						<Button color="contrast">Login</Button>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

export default withStyles(styles)(Header);

// const mapStateToProps = state => {
// 	return {
// 		position: state.position,
// 		dominance: state.dominance,
// 		technique_type: state.technique_type,
// 		stage: state.stage
// 	};
// };
//
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setPosition: (position) => dispatch(setPosition(position)),
// 		setDominance: (dominance) => dispatch(setDominance(dominance)),
// 		setTechniqueType: (type) => dispatch(setTechniqueType(type)),
// 		setPositionStage: (stage) => dispatch(setPositionStage(stage)),
// 	}
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default () => (
//
// )
