import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import {format} from 'date-fns'
import { gql, graphql } from 'react-apollo'
import compose from 'recompose/compose'
import autobind from 'autobind-decorator'
import {bindActionCreators} from 'redux';
import * as actionCreators from '../lib/actionCreators';
import {connect} from 'react-redux';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Select from 'material-ui/Select';
import ImageUpload from './image-upload'
import {countries} from '../lib/countries'

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	menu: {
		width: 200,
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2,
	},
});


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
		const { classes, activity_date, ...rest} = this.props;

		return (
			<form className={classes.container} noValidate autoComplete="off">
				<FormControl className={classes.formControl}>
					<TextField
						id="first_name"
						label="First Name"
						className={classes.textField}
						value={this.state.first_name}
						onChange={this.handleChange('first_name')}
						margin="normal"
					/>
				</FormControl>
				<FormControl className={classes.formControl}>
					<TextField
						id="last_name"
						label="Last Name"
						className={classes.textField}
						value={this.state.last_name}
						onChange={this.handleChange('last_name')}
						margin="normal"
					/>
				</FormControl>
				<FormControl className={classes.formControl}>
					<TextField
						id="email"
						label="Email"
						className={classes.textField}
						value={this.state.email}
						onChange={this.handleChange('email')}
						margin="normal"
					/>
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="country">Country</InputLabel>
					<Select
						value={this.state.country}
						onChange={this.handleChange('country')}
						input={<Input name="country" id="country" />}
					>
						{
							countries.map(country => <MenuItem key={country.code} value={country.code}>{country.name}</MenuItem>)
						}
					</Select>
				</FormControl>

				<FormControl className={classes.formControl}>
					<InputLabel htmlFor="belt">Belt</InputLabel>
					<Select
						value={this.state.belt}
						onChange={this.handleChange('belt')}
						input={<Input name="belt" id="belt" />}
					>
						<MenuItem value="white">White</MenuItem>
						<MenuItem value="blue">Blue</MenuItem>
						<MenuItem value="purple">Purple</MenuItem>
						<MenuItem value="brown">Brown</MenuItem>
						<MenuItem value="black">Black</MenuItem>
					</Select>
				</FormControl>

				<FormControlLabel
					control={
						<Checkbox
							checked={this.state.is_instructor}
							onChange={this.handleCheckboxChange('is_instructor')}
							value={this.state.is_instructor}
						/>
					}
					label="Are you an instructor/coach?"
				/>

				<ImageUpload />

				<button type="button" onClick={this.submit}>Submit test</button>

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
	withStyles(styles),
)(RegisterForm);
