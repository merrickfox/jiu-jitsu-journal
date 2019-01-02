import React from 'react';
import { gql, graphql } from 'react-apollo'
import compose from 'recompose/compose'
import {countries} from '../../config/countries'
import * as _ from 'lodash'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../lib/actionCreators';
import {connect} from 'react-redux';
import BeltSelect from '../belt-select'
import {defaultSelectConfig} from '../../config/select-configs';
import FormInput from '../form-input/form-input'
import FormSelect from '../form-select/form-select'
import "../../styles/global.scss"
import "./basic-details-form.scss"




class BasicDetailsForm extends React.Component {


	constructor (props) {
		super(props)
		this.countries = this.formatCountriesForSelect()
		this.displayCountries = _.cloneDeep(this.countries);

		this.state = {
			first_name: '',
			last_name: '',
			email: this.props.user.email,
			country: '',
			avatar_url: '',
			is_instructor: false,
			display_countries: this.displayCountries
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

	formatCountriesForSelect = () => {
		return countries.map(country => {
			return {
				value: country.name,
				sub: country.code,
				// label: <Box direction='row'  justify='between' className='select-value' key={country.code}>  <span title={country.name}>    {_.truncate(country.name, {'length': 35})}  </span>  <span className='secondary'>    {country.code}  </span></Box>
			}
		});
	}

	onSearchCountry = (event) => {
		this.displayCountries = _.filter(this.countries, country => {
			return country.value.toLowerCase().includes(event.target.value.toLowerCase()) || country.sub.toLowerCase().includes(event.target.value.toLowerCase())
		})

		this.setState({
			display_countries: this.displayCountries
		});
	}


	submit = () => {
		console.log('submitting')
		this.props.createActivity();

	}

	render() {

		return (
			<form >
				<FormInput
					label='First Name'
					type='text'
					name='firstName'
					value={this.state.first_name}
					placeholder='First Name'
					handleChange={this.handleChange('first_name')}
				/>

				<FormInput
					label='Last Name'
					type='text'
					name='lastName'
					value={this.state.last_name}
					placeholder='Last Name'
					handleChange={this.handleChange('last_name')}
				/>

				<FormInput
					label='Email Address'
					type='text'
					name='email'
					value={this.state.email}
					placeholder='Email Address'
					handleChange={this.handleChange('email')}
				/>

				<FormSelect
					label='Country'
					options={countries}
					config={defaultSelectConfig}
					name='country'
					value={this.state.country}
					placeholder='Select Country'
					handleChange={this.handleSelectChange('country')}
				/>



					{/*<Box align='center'*/}
							 {/*pad='none'*/}
							 {/*margin='small'*/}
							 {/*colorIndex='light-2'>*/}
						{/*<FormField label='Country'*/}
											 {/*className='form-field'*/}
											 {/*htmlFor='country'*/}
											 {/*size='large'*/}
											 {/*error=''>*/}
							{/*<Select placeHolder='Select Country'*/}
											{/*inline={false}*/}
											{/*multiple={false}*/}
											{/*onSearch={this.onSearchCountry}*/}
											{/*options={this.displayCountries}*/}
											{/*value={this.state.country.value}*/}
											{/*onChange={this.handleSelectChange('country')} />*/}
						{/*</FormField>*/}
					{/*</Box>*/}

					{/*<Box align='center'*/}
							 {/*pad='none'*/}
							 {/*margin='small'*/}
							 {/*colorIndex='light-2'>*/}
						{/*<BeltSelect reduxUpdater={this.props.beltRegister} />*/}
					{/*</Box>*/}

					{/*<Box align='center'*/}
							 {/*pad='none'*/}
							 {/*margin='small'*/}
							 {/*colorIndex='light-2'>*/}
						{/*<CheckBox label="I'm an instructor"*/}
											{/*toggle={false}*/}
											{/*disabled={false}*/}
											{/*checked={this.state.is_instructor}*/}
											{/*onChange={this.isInstructorToggle}*/}
											{/*reverse={true} />*/}
					{/*</Box>*/}


				{/*</Box>*/}

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
