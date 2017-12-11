import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import withRoot from '../components/withRoot';
import Grid from 'material-ui/Grid';
import {subDays, format} from 'date-fns';
import {times} from 'lodash';


const styles = theme => ({
	grid: {
		flexGrow: 1,
	},
	card: {
		minWidth: 100,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		marginBottom: 16,
		fontSize: 14,
		color: theme.palette.text.secondary,
	},
	pos: {
		marginBottom: 12,
		color: theme.palette.text.secondary,
	},
});

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

	addActivity () {
		console.log(this)
		this.props.setDate('aint dat some shieeeet')
	}

	render() {
		const {classes} = this.props;
		const bull = <span className={classes.bullet}>•</span>;
		const oneSeventh = 1.714285714;
		return (
			<div>
				<Grid container spacing={16} justify="center" className={classes.grid}>

					{this.generateWeek().map(day =>
						<Grid item xs={oneSeventh} key={day.toString()}>
							<Card className={classes.card}>
								<CardContent>
									<Typography className={classes.title}>{format(day, 'dddd')}</Typography>
									<Typography type="headline">{format(day, 'Do')}</Typography>
									<Typography type="headline">{format(day, 'MMM')}</Typography>
								</CardContent>
								<CardActions>
									<Button dense onClick={this.addActivity}>Add Activity</Button>
								</CardActions>
							</Card>
						</Grid>
					)}
				</Grid>
			</div>
		);
	}
}


export default withRoot(withStyles(styles)(Week));