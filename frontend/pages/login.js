import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';
import Page from '../components/page'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose'
import withData from '../lib/withData'
import { gql, graphql, withApollo } from 'react-apollo'
import Auth from '../lib/auth0';
import Router from 'next/router';

const styles = {
};

class Login extends Component {

	async componentDidMount () {
		const auth = new Auth();
		if (auth.isAuthenticated()) {
			console.log('already authed')
		} else {
			console.log('setting auth')
			const didStoreAuth = await auth.handleAuthentication();
		}

		const auth0User = await auth.getUserInfo();
		this.props.setUser(auth.formatAuth0UserObject(auth0User));

		const userIsRegistered = await this.isUserRegistered(auth0User.sub);
		if (userIsRegistered) {
			Router.push('/dashboard')
		} else {
			Router.push('/register')
		}
	}

	async isUserRegistered (id) {
		const result = await this.props.client.query({
			query: gql`
				query GetUser($id: String!) {
					user(id: $id) {
						id
						first_name
						last_name
						email
						academy_id 
						country 
						belt 
						avatar_url 
						is_instructor 
					}
				}
			`,
			variables: {
				id,
			},
		})
		if (result.data.user) this.props.setUser(result.data.user);
		return !!result.data.user;
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



function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}


const reduxWrapper = connect(null, mapDispatchToProps);


export default compose(
	withData,
	reduxWrapper,
	withRoot,
	withStyles(styles),
	withApollo,
)(Login);
