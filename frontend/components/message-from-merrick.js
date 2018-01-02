import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import NoSSR from './no-ssr';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import Avatar from 'material-ui/Avatar';

const styles = {
	bigAvatar: {
		width: 80,
		height: 80,
		position: 'absolute',
		marginLeft: 'auto',
		marginRight: 'auto',
		left: '0',
		right: '0',
		top: '-40px'
	},
	dialog: {
		overflowY: 'visible',
		padding: '30px'
	}
};

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class MessageFromMerrick extends React.Component {

	handleClose = () => {
		this.props.closeMerrickMessage()
	};


	render() {
		const { classes, message } = this.props;
		return (
			<div>
				<NoSSR>
					<Dialog
						open={this.props.message.is_message_open}
						transition={Transition}
						keepMounted
						onClose={this.handleClose}
						aria-labelledby="alert-dialog-slide-title"
						aria-describedby="alert-dialog-slide-description"
						classes={{
							paper: classes.dialog, // className, e.g. `OverridesClasses-root-X`
						}}
					>
						<Avatar alt="Merrick" src="/static/me.jpg" className={classes.bigAvatar} />
						<DialogTitle id="alert-dialog-slide-title">
							{"A message from Merrick"}
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-slide-description">
								{message.message_text}
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="primary">
								Got it!
							</Button>
						</DialogActions>
					</Dialog>
				</NoSSR>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		message: state.merrickMessage,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const reduxWrapper = connect(mapStateToProps, mapDispatchToProps);

export default compose(
	reduxWrapper,
	withStyles(styles)
)(MessageFromMerrick);
