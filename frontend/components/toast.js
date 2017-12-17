import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import {connect} from 'react-redux';
import compose from 'recompose/compose'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';

const styles = theme => ({
	close: {
		width: theme.spacing.unit * 4,
		height: theme.spacing.unit * 4,
	},
});

class Toast extends React.Component {

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		this.props.closeToast();
	};

	render() {
		const { classes, toast_data } = this.props;
		return (
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				open={toast_data.is_toast_open}
				autoHideDuration={2000}
				onClose={this.handleClose}
				onRequestClose={this.handleClose}
				SnackbarContentProps={{
					'aria-describedby': 'message-id',
				}}
				message={<span id="message-id">{toast_data.toast_text}</span>}
				action={[
					<Button key="undo" color="accent" dense onClick={this.handleClose}>
						UNDO
					</Button>,
					<IconButton
						key="close"
						aria-label="Close"
						color="inherit"
						className={classes.close}
						onClick={this.handleClose}
					>
						<CloseIcon />
					</IconButton>,
				]}
			/>
		);
	}
}

function mapStateToProps(state) {
	return{
		toast_data: state.toast,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const reduxWrapper = connect(mapStateToProps, mapDispatchToProps);

export default compose(
	reduxWrapper,
	withStyles(styles),
)(Toast);
