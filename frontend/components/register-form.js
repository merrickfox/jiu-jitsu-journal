import React from 'react';
import { gql, graphql } from 'react-apollo'
import compose from 'recompose/compose'
import autobind from 'autobind-decorator'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';



class RegisterForm extends React.Component {
	state = {
		first_name: '',
		last_name: '',
		email: this.props.user.email,
		country: '',
		avatar_url: '',
		belt: '',
		is_instructor: false,
	};


	handleChange = name => event =>  {
		this.setState({
			[name]: event.target.value,
		});

	};


	handleCheckboxChange = name => (event, checked) =>  {
		this.setState({
			[name]: checked,
		});
	};


	@autobind
	submit () {
		console.log('submitting')
		this.props.createActivity();

	}

	render() {

		return (
			<form noValidate autoComplete="off">
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
						<FormField label='First Name'
											 className='form-field'
											 htmlFor='first_name'
											 size='large'
											 error=''>
							<TextInput
								value={this.state.first_name}
								size='small'
								id='first_name'
								name='first_name'
								onDOMChange={this.handleChange('first_name')}
							/>

						</FormField>
					</Box>

					<Box align='center'
							 pad='none'
							 margin='small'
							 colorIndex='light-2'>
						<FormField label='Last Name'
											 className='form-field'
											 htmlFor='last_name'
											 size='large'
											 error=''>
							<TextInput
								value={this.state.last_name}
								id='last_name'
								name='last_name'
								onDOMChange={this.handleChange('last_name')}
							/>

						</FormField>
					</Box>

					<Box align='center'
							 pad='none'
							 margin='small'
							 colorIndex='light-2'>
						<FormField label='Email'
											 className='form-field'
											 htmlFor='email'
											 size='large'
											 error=''>
							<TextInput
								value={this.state.email}
								id='email'
								name='email'
								onDOMChange={this.handleChange('email')}
							/>

						</FormField>
					</Box>




				</Box>

				{ /*language=CSS*/ }
				<style jsx global >{`
          .form-field {
						width: 330px;
          }
      `}</style>
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
)(RegisterForm);
