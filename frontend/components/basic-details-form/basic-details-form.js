import React from 'react';
import { gql, graphql } from 'react-apollo'
import compose from 'recompose/compose'
import {countries} from '../../config/countries'
import {belts} from '../../config/belts'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../lib/actionCreators';
import {connect} from 'react-redux';
import {defaultSelectConfig} from '../../config/select-configs';
import FormInput from '../form-input/form-input'
import FormSelect from '../form-select/form-select'
import BeltOptions from "../belt-options/belt-options";
import FormCheckbox from "../form-checkbox/form-checkbox";
import Config from "../../config/config"




class BasicDetailsForm extends React.Component {


	constructor (props) {
		super(props)

		this.state = {
			first_name: '',
			last_name: '',
			email: this.props.user.email,
			country: '',
			belt: '',
			avatar_url: '',
			is_instructor: false,
		};
	}


	validate = () => {
		this.props.reduxUpdater(this.state);
	}

	handleChange = name => event =>  {
		this.setState({
			[name]: event.target.value,
		},this.validate);

	};


	isInstructorToggle = event =>  {
		this.setState({
			is_instructor: !this.state.is_instructor,
		},this.validate);
	};

	handleSelectChange = name => event =>  {
		this.setState({
			[name]: event.value,
		},this.validate);
	};


	submit = () => {
		console.log('submitting')
		this.props.createActivity();

	}

	CountryMenuList = (props) => {
		const children = props.children;

		if (!children.length) {
			return (<div className="menu-list">{children}</div>);
		}

		return (
			<div className="menu-list">
				{children.length && children.map((key, i) => {
					delete key.props.innerProps.onMouseMove; //FIX LAG!!
					delete key.props.innerProps.onMouseOver;  //FIX LAG!!
					return (
						<div className="menu-list-item" key={i}>{key}</div>
					);
				})}
			</div>
		);
	};


	render() {

		return (
			<form className='basic-details-form'>
				<div className="form-element">
					<FormInput
						label='First Name'
						type='text'
						name='firstName'
						value={this.state.first_name}
						placeholder='First Name'
						handleChange={this.handleChange('first_name')}
					/>
				</div>

				<div className="form-element">
					<FormInput
						label='Last Name'
						type='text'
						name='lastName'
						value={this.state.last_name}
						placeholder='Last Name'
						handleChange={this.handleChange('last_name')}
					/>
				</div>

				<div className="form-element">
					<FormInput
						label='Email Address'
						type='text'
						name='email'
						value={this.state.email}
						placeholder='Email Address'
						handleChange={this.handleChange('email')}
					/>
				</div>

				<div className="form-element">
					<FormSelect
						label='Country'
						options={countries}
						config={defaultSelectConfig}
						name='country'
						value={this.state.country}
						placeholder='Start typing or click and select'
						handleChange={this.handleSelectChange('country')}
						customMenuList={this.CountryMenuList}
					/>
				</div>

				<div className="form-element">
					<FormSelect
						label='Belt'
						options={belts}
						config={defaultSelectConfig}
						name='belt'
						value={this.state.belt}
						placeholder='What belt are you?'
						handleChange={this.handleSelectChange('belt')}
						customOption={BeltOptions}
					/>
				</div>

				<div className="form-elemeent">
					<FormCheckbox
						label='Are you an instructor?'
						name='instructor'
						value={this.state.is_instructor}
						additional={Config.COPY.REGISTER.IS_INSTRUCTOR_ADDITIONAL}
						handleChange={this.isInstructorToggle}
					/>
				</div>
			</form>
		);
	}
}

const addClass = gql`
  mutation AddBjjClass($class: BjjClassInput!) {
		addBjjClass(class: $class) {
			id,
			user
		}
	}
`

const gqlWrapper = graphql(addClass, {
	props: ({ ownProps, mutate }) => ({
		createActivity: (data) => mutate({
			variables: {
				"class": {
					"activity_date": 111111,
					"time": 45456456,
					"instructor_id": "2gerg2rg2g-2erg2reg",
					"academy_id": "2gerg2rg2g-2erg2reg",
					"class_length": 90,
					"warmup_time": 15,
					"technique_time": 30,
					"rolling_time": 45,
					"techniques_learned": [
						{
							"id": "234-23-4234-sd",
							"notes": "sdfsdf sdf sdf sdf sdfsdfsdf sdf s"
						}
					],
					"sparring_details": [
						{
							"nemesis_id": "2gerg2rg2g-2erg2reg",
							"techniques_hit": ["2gerg2rg2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
							"techniques_succumbed": ["2gerg2rg2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
							"notes": "sdfsdfsdf asdas dasd asd asdsd"
						},
						{
							"nemesis_id": "2gerg2rg2g-2ergasd2reg",
							"techniques_hit": ["2gerg2rg2g-2erg2reg", "2gerg2rgasd2g-2erg2reg"],
							"techniques_succumbed": ["2gerg2rasdsag2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
							"notes": "sdfsdfsdf asdas dasd asd asasdasd222dsd"
						}
					]
				}
			}
		}).then(({ data }) => {
			console.log('got data', data);
		}).catch((error) => {
			console.log('there was an error sending the query', error);
		})
	})
})

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
	gqlWrapper,
	reduxWrapper,
)(BasicDetailsForm);
