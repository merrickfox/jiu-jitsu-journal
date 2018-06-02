import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import withRoot from '../components/withRoot';
import Grid from 'material-ui/Grid';
import {subDays, format} from 'date-fns';
import {times} from 'lodash';
import Router from 'next/router'
import autobind from 'autobind-decorator'





const daysToDisplay = 7;

class Week extends React.Component {

	constructor (props) {
		super (props)
		this.addActivity = this.addActivity.bind(this);
		this.generateWeek();
	}

	generateWeek () {
		const today = new Date();
		const days = []
		times(daysToDisplay, (idx)=>{
			let day = subDays(today, 6 - idx)
			days.push(day);
		})

		return days;
	}

	@autobind
	addActivity (day) {
		this.props.setDateForAddActivity(day.toString())
		Router.push('/add-activity')
	}

	render() {
		const {classes} = this.props;
		const bull = <span >•</span>;
		const oneSeventh = 1.714285714;
		return (
			<div>
				week picker
				{/*<Grid container spacing={16} justify="center" className={classes.grid}>*/}

					{/*{this.generateWeek().map(day =>*/}
						{/*<Grid item xs={oneSeventh} key={day.toString()}>*/}
							{/*<Card className={classes.card}>*/}
								{/*<CardContent>*/}
									{/*<Typography className={classes.title}>{format(day, 'dddd')}</Typography>*/}
									{/*<Typography type="headline">{format(day, 'Do')}</Typography>*/}
									{/*<Typography type="headline">{format(day, 'MMM')}</Typography>*/}
								{/*</CardContent>*/}
								{/*<CardActions>*/}
									{/*<Button dense onClick={()=> this.addActivity(day)}>Add Activity</Button>*/}
								{/*</CardActions>*/}
							{/*</Card>*/}
						{/*</Grid>*/}
					{/*)}*/}
				{/*</Grid>*/}
			</div>
		);
	}
}


export default Week;