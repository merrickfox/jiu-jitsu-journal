import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import {format} from 'date-fns'

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
});


class BjjClassForm extends React.Component {
	state = {
		name: 'Cat in the Hat',
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	render() {
		const { classes, activity_date} = this.props;
		console.log(format(activity_date, 'yyyy-mm-dd'))
		return (
			<form className={classes.container} noValidate autoComplete="off">
				<TextField
					id="name"
					label="Name"
					className={classes.textField}
					value={this.state.name}
					onChange={this.handleChange('name')}
					margin="normal"
				/>
				<TextField
					id="date"
					label="Activity Date"
					type="date"
					defaultValue={format(activity_date, 'YYYY-MM-DD')}
					className={classes.textField}
					margin="normal"
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</form>
		);
	}
}


export default withStyles(styles)(BjjClassForm);