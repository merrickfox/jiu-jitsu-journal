import React from 'react';

import {format} from 'date-fns'
import { gql, graphql } from 'react-apollo'
import compose from 'recompose/compose'
import autobind from 'autobind-decorator'
import ImageUpload from './image-upload'



class BjjClassForm extends React.Component {
	state = {
		name: 'Cat in the Hat',
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};




	submit = () => {
		console.log('submitting')
		this.props.createActivity();

	}

	render() {
		const { classes, activity_date, ...rest} = this.props;
		console.log(format(activity_date, 'yyyy-mm-dd'))
		return (
			<form className={classes.container} noValidate autoComplete="off">
				{/*<TextField*/}
					{/*id="name"*/}
					{/*label="Name"*/}
					{/*className={classes.textField}*/}
					{/*value={this.state.name}*/}
					{/*onChange={this.handleChange('name')}*/}
					{/*margin="normal"*/}
				{/*/>*/}
				{/*<TextField*/}
					{/*id="date"*/}
					{/*label="Activity Date"*/}
					{/*type="date"*/}
					{/*defaultValue={format(activity_date, 'YYYY-MM-DD')}*/}
					{/*className={classes.textField}*/}
					{/*margin="normal"*/}
					{/*InputLabelProps={{*/}
						{/*shrink: true,*/}
					{/*}}*/}
				{/*/>*/}


				<button type="button" onClick={this.submit}>Submit test</button>


				<ImageUpload {...rest}/>
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

export default compose(
	gqlWrapper,
)(BjjClassForm);


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