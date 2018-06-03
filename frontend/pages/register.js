import React, { Component } from 'react';
import Page from '../components/page'
import BasicDetailsForm from '../components/basic-details-form'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose'
import withData from '../lib/withData'
import config from '../config'
import Heading from 'grommet/components/Heading';
import ImageUpload from '../components/image-upload'

class Register extends Component {

	componentWillMount() {
	  //this.props.openMerrickMessage(config.COPY.REGISTER.MESSAGE_FROM_MERRICK)
	}

	render() {
		return (
      <div>
        <Page title="Register">
					<Heading tag='h3'>
						The Basics
					</Heading>
          <BasicDetailsForm/>
					<Heading tag='h3'>
						Your Avatar
					</Heading>
					<ImageUpload></ImageUpload>
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

