import React, { Component } from 'react';
import Page from '../components/page'
import BasicDetailsForm from '../components/basic-details-form'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose'
import withData from '../lib/withData'
import Heading from 'grommet/components/Heading';
import ImageUpload from '../components/image-upload'
import FindCreateAcademy from '../components/find-create-academy'

class Register extends Component {

	componentWillMount() {
	}

	render() {
		return (
      <div>
        <Page title="Please complete your profile">
					<Heading tag='h3' className='heading'>
						The Basics
					</Heading>
          <BasicDetailsForm/>
					<Heading tag='h3' className='heading'>
						Your Avatar (optional)
					</Heading>
					<ImageUpload></ImageUpload>
					<Heading tag='h3' className='heading'>
						Your Academy/School
					</Heading>
					<FindCreateAcademy/>
        </Page>

				{ /*language=CSS*/ }
				<style jsx global>{`
          .heading{
						margin: 2em 0
          }


      `}</style>
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

