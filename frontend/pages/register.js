import React, { Component } from 'react';
import Page from '../components/page/page'
import BasicDetailsForm from '../components/basic-details-form'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose'
import withData from '../lib/withData'
import ImageUpload from '../components/image-upload'
import FindCreateAcademy from '../components/find-create-academy'
import "../styles/global.scss"

class Register extends Component {

	componentWillMount() {
	}

	render() {
		const {updateBasicDetails, userImageUploadedRegister, selectAcademyRegister} = this.props
		return (
      <div>
        <Page title="Please complete your profile">
					<h3 className='heading'>
						The Basics
					</h3>
          <BasicDetailsForm reduxUpdater={updateBasicDetails}/>
					<h3 className='heading'>
						Your Avatar (optional)
					</h3>
					<ImageUpload reduxUpdater={userImageUploadedRegister}></ImageUpload>
					<h3 className='heading'>
						Your Academy/School
					</h3>
					<FindCreateAcademy />
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

