import React, { Component } from 'react';
import Page from '../components/page'
import RegisterForm from '../components/register-form'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose'
import withData from '../lib/withData'
import config from '../config'


class Register extends Component {

	componentWillMount() {
	  //this.props.openMerrickMessage(config.COPY.REGISTER.MESSAGE_FROM_MERRICK)
	}

	render() {
		return (
      <div>
        <Page title="Register">
          <RegisterForm/>
        </Page>
      </div>
		);
	}
}

function mapStateToProps(state) {
	return{
		user: state.user,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const reduxWrapper = connect(mapStateToProps, mapDispatchToProps);

export default compose(
	withData,
	reduxWrapper,
)(Register);

