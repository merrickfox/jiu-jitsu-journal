import React, { Component } from 'react';
import Page from '../components/page/page'
import BasicDetailsForm from '../components/basic-details-form/basic-details-form'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose'
import withData from '../lib/withData'
import ImageUpload from '../components/image-upload/image-upload'
import FindCreateAcademy from '../components/find-create-academy/find-create-academy'
import "../styles/styles.scss"
import CONFIG from "../config/config"
import Button from "../components/button/button";

class Register extends Component {

	componentWillMount() {
	}

	register = ()=> {

	}

	render() {
		const {updateBasicDetails, userImageUploadedRegister, selectAcademyRegister} = this.props
		return (

			<Page title="Please complete your profile">
				<div className="register-container">
					<h2 className='heading'>
						Register
					</h2>
					<hr/>

					<section className="basic-details">
						<div className="form-title">
							<h5>Basic Details</h5>
							<span>{CONFIG.COPY.REGISTER.BASIC_DETAILS}</span>
						</div>

						<div className="form-section">
							<BasicDetailsForm reduxUpdater={updateBasicDetails}/>
						</div>
					</section>

					<section className="avatar">
						<div className="form-title">
							<h5>Avatar</h5>
							<span>{CONFIG.COPY.REGISTER.AVATAR}</span>
						</div>

						<div className="form-section">
							<ImageUpload reduxUpdater={userImageUploadedRegister}></ImageUpload>
						</div>
					</section>

					<section className="academy">
						<div className="form-title">
							<h5>Your Academy</h5>
							<span>{CONFIG.COPY.REGISTER.ACADEMY}</span>
						</div>

						<div className="form-section">
							<FindCreateAcademy />
						</div>
					</section>

					<section className="academy">
						<div className="form-title">
							<h5>Finished</h5>
							<span>{CONFIG.COPY.REGISTER.FINISHED}</span>
						</div>

						<div className="form-section">
							<Button clickHandler={this.register} text="All Done" color="blue" />
						</div>
					</section>



				</div>
			</Page>

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

