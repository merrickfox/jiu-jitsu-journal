import React from 'react';
import {format} from 'date-fns'
import { gql, graphql } from 'react-apollo'
import ImageUpload from '../image-upload/image-upload'
import {countries} from '../../config/countries'
import * as _ from 'lodash';
import {search} from '../../lib/algolia'
import Search from '../search-input/search-input'
import AcademySearchSuggestion from '../academy-search-suggestion/academy-search-suggestion'
import * as actionCreators from '../../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {bindActionCreators} from 'redux';
import FormInput from "../form-input/form-input";
import FormSelect from "../form-select/form-select";
import {defaultSelectConfig} from "../../config/select-configs";
import {belts} from "../../config/belts";
import BeltOptions from "../belt-options/belt-options";
import FormCheckbox from "../form-checkbox/form-checkbox";
import Config from "../../config/config";
import Button from "../button/button";






class FindCreateAcademy extends React.Component {


	constructor (props) {
		super(props)
		this.countries = this.formatCountriesForSelect()
		this.displayCountries = _.cloneDeep(this.countries);

		this.state = {
			name: '',
			country: '',
			postcode: '',
			url: '',
			avatar: '',
			display_countries: this.displayCountries,
		};

		search('car');
	}

	validate = () => {
		this.props.createAcademyDetails(this.state);
	}

	formatCountriesForSelect = () => {
		return countries.map(country => {
			return {
				value: country.name,
				sub: country.code,
				label: <div  className='select-value' key={country.code}>  <span title={country.name}>    {_.truncate(country.name, {'length': 35})}  </span>  <span className='secondary'>    {country.code}  </span></div>
			}
		});
	}

	handleSelectChange = name => event =>  {
		this.setState({
			[name]: event.value,
		},this.validate);
	};

	onSearchCountry = (event) => {
		this.displayCountries = _.filter(this.countries, country => {
			return country.value.toLowerCase().includes(event.target.value.toLowerCase()) || country.sub.toLowerCase().includes(event.target.value.toLowerCase())
		})

		this.setState({
			display_countries: this.displayCountries
		});
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		},this.validate);
	};

	handleAvatarUrl (url) {
		console.log('avatar', url)
	}



	submit = () => {
		console.log('submitting')
		this.props.createActivity();

	}

	render() {
		const {academyImageUploadedRegister} = this.props;
		return (
			<div className="find-create-academy">
				<form noValidate autoComplete="off">
					{!this.props.show_create_academy &&
					<Search
						placeholder='Start typing your academy name'
						suggestion={AcademySearchSuggestion}
					>
					</Search>
					}

					{ this.props.show_create_academy &&
					<div>

						<div className="form-element">
							<FormInput
								label='Academy Name'
								type='text'
								name='name'
								value={this.state.name}
								placeholder='Academy Name'
								handleChange={this.handleChange('name')}
							/>
						</div>

						<div className="form-element">
							<FormInput
								label='Academy Website'
								type='text'
								name='url'
								value={this.state.url}
								placeholder='Academy Website'
								handleChange={this.handleChange('url')}
							/>
						</div>

						<div className="form-element">
							<FormInput
								label='Postcode'
								type='text'
								name='postcode'
								value={this.state.postcode}
								placeholder='Postcode'
								handleChange={this.handleChange('postcode')}
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

						<h5>Upload Academy Avatar</h5>
						<div className="form-element">
							<ImageUpload reduxUpdater={academyImageUploadedRegister}></ImageUpload>
						</div>

						<div className="form-element">
							<Button text="Register This Academy"
											clickHandler={this.createNewAcademy}
											color="blue"
							/>
						</div>
						
					</div>
					}
				</form>
			</div>
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
		show_create_academy: state.register.show_create_academy,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const reduxWrapper = connect(mapStateToProps, mapDispatchToProps);

export default compose(
	gqlWrapper,
	reduxWrapper,
)(FindCreateAcademy);


const bjjClass = {
	"activity_date": 3452435245,
	"user": "2regrg-2reg2erg-2ergerg",
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