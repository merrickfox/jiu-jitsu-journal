import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import Page from '../components/page'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose'
import withData from '../lib/withData'
import Auth from '../lib/auth0';

const styles = {
};

class Login extends Component {

	async componentDidMount () {
		const auth = new Auth();
		if (auth.isAuthenticated()) {
			console.log('already authed')
			const userInfo = await auth.getUserInfo();
			console.log('user', userInfo);
		} else {
			console.log('setting auth')
			const didStoreAuth = await auth.handleAuthentication();
			const userInfo = await auth.getUserInfo();
			console.log('user', userInfo);
		}

		//const user = await auth.getUserInfo();
		//console.log(user)
	}

  render() {
    return (
      <div className={this.props.classes.root}>
        <Page title="Login">
          <div>
						<div>Login screen</div>
          </div>
        </Page>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return{
		date: state.date,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const reduxWrapper = connect(mapStateToProps, mapDispatchToProps);

export default compose(
	withData,
	reduxWrapper,
  withRoot,
	withStyles(styles),
)(Login);

