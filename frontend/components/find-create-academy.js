import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import {format} from 'date-fns'
import { gql, graphql } from 'react-apollo'
import compose from 'recompose/compose'
import autobind from 'autobind-decorator'
import ImageUpload from './image-upload'
import {countries} from '../lib/countries'
import { FormControl, FormHelperText, FormControlLabel } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';


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
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 200,
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2,
	},
	menu: {
		width: 200,
	},
});


class FindCreateAcademy extends React.Component {
	state = {
		name: '',
		country: '',
		postcode: '',
		url: '',
		avatar: '',
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	handleAvatarUrl (url) {
		console.log('avatar', url)
	}



	@autobind
	submit () {
		console.log('submitting')
		this.props.createActivity();

	}

	render() {
		const { classes, activity_date, ...rest} = this.props;
		console.log(format(activity_date, 'yyyy-mm-dd'))
		return (
			<div className={classes.container}>
				find create activity
				{/*<FormControl className={classes.formControl}>*/}
					{/*<TextField*/}
						{/*id="name"*/}
						{/*label="Academy Name"*/}
						{/*className={classes.textField}*/}
						{/*value={this.state.name}*/}
						{/*onChange={this.handleChange('name')}*/}
						{/*margin="normal"*/}
					{/*/>*/}
				{/*</FormControl>*/}

				{/*<FormControl className={classes.formControl}>*/}
					{/*<InputLabel htmlFor="country">Country</InputLabel>*/}
					{/*<Select*/}
						{/*value={this.state.country}*/}
						{/*onChange={this.handleChange('country')}*/}
						{/*input={<Input name="country" id="country" />}*/}
					{/*>*/}
						{/*{*/}
							{/*countries.map(country => <MenuItem key={country.code} value={country.code}>{country.name}</MenuItem>)*/}
						{/*}*/}
					{/*</Select>*/}
				{/*</FormControl>*/}

				{/*<FormControl className={classes.formControl}>*/}
					{/*<TextField*/}
						{/*id="postcode"*/}
						{/*label="Postal Code/Zip"*/}
						{/*className={classes.textField}*/}
						{/*value={this.state.postcode}*/}
						{/*onChange={this.handleChange('postcode')}*/}
						{/*margin="normal"*/}
					{/*/>*/}
				{/*</FormControl>*/}

				{/*<FormControl className={classes.formControl}>*/}
					{/*<TextField*/}
						{/*id="url"*/}
						{/*label="Website URL"*/}
						{/*className={classes.textField}*/}
						{/*value={this.state.url}*/}
						{/*onChange={this.handleChange('url')}*/}
						{/*margin="normal"*/}
					{/*/>*/}
				{/*</FormControl>*/}



				<ImageUpload handleAvatarUrl={this.handleAvatarUrl}/>

				<button type="button" onClick={this.submit}>Create Academy</button>
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

export default compose(
	gqlWrapper,
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