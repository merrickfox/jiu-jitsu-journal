import React from 'react';
import {format} from 'date-fns'
import { gql, graphql } from 'react-apollo'
import autobind from 'autobind-decorator'
import ImageUpload from './image-upload/image-upload'
import {countries} from '../config/countries'
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Box from 'grommet/components/Box';
import * as _ from 'lodash';
import {search} from '../lib/algolia'
import Search from './search'
import AcademySearchSuggestion from './academy-search-suggestion'
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {bindActionCreators} from 'redux';






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
			display_countries: this.displayCountries
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
				label: <Box direction='row'  justify='between' className='select-value' key={country.code}>  <span title={country.name}>    {_.truncate(country.name, {'length': 35})}  </span>  <span className='secondary'>    {country.code}  </span></Box>
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
			<div >
				<form noValidate autoComplete="off">
					<Search
						placeholder='Start typing your academy name'
						suggestion={AcademySearchSuggestion}
					>
					</Search>

					{ this.props.show_create_academy &&
					<div>
						<Box
							direction='row'
							justify='center'
							align='center'
							wrap={true}
							pad='none'
							margin='small'
							colorIndex='light-2'
						>
							<Box align='center'
									 pad='none'
									 margin='small'
									 colorIndex='light-2'>
								<FormField label='Academy Name'
													 className='form-field'
													 htmlFor='name'
													 size='large'
													 error=''>
									<TextInput
										value={this.state.name}
										size='small'
										id='name'
										name='name'
										onDOMChange={this.handleChange('name')}
									/>

								</FormField>
							</Box>
							<Box align='center'
									 pad='none'
									 margin='small'
									 colorIndex='light-2'>
								<FormField label='URL'
													 className='form-field'
													 htmlFor='url'
													 size='large'
													 error=''>
									<TextInput
										value={this.state.url}
										id='url'
										name='url'
										onDOMChange={this.handleChange('url')}
									/>

								</FormField>
							</Box>
							<Box align='center'
									 pad='none'
									 margin='small'
									 colorIndex='light-2'>
								<FormField label='Postcode/Zip'
													 className='form-field'
													 htmlFor='postcode'
													 size='large'
													 error=''>
									<TextInput
										value={this.state.postcode}
										id='postcode'
										name='postcode'
										onDOMChange={this.handleChange('postcode')}
									/>

								</FormField>
							</Box>

							<Box align='center'
									 pad='none'
									 margin='small'
									 colorIndex='light-2'>
								<FormField label='Country'
													 className='form-field'
													 htmlFor='country'
													 size='large'
													 error=''>
									<Select placeHolder='Select Country'
													inline={false}
													multiple={false}
													onSearch={this.onSearchCountry}
													options={this.displayCountries}
													value={this.state.country.value}
													onChange={this.handleSelectChange('country')} />
								</FormField>
							</Box>
						</Box>

						<Heading tag='h3' className='heading'>
							Academy Logo
						</Heading>
						<ImageUpload reduxUpdater={academyImageUploadedRegister}></ImageUpload>
					</div>
					}



				</form>

				{ /*language=CSS*/ }
				<style jsx >{`
          .form-field {
						min-width: 356px;
          }

					.grommetux-select__options {
						padding: 0 1em;
						background-color: white;
					}
      `}</style>

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