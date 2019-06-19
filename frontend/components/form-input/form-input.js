import React from 'react';
import * as _ from 'lodash';

class FormInput extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			touched: false,
			blurred: false,
			value: '',
			valid: true,
			show_validation_error: false
		};
	}

	validationRules = {
		required: (value)=> {
			return !_.isEmpty(value);
		}
	};

	handleFocus = ()=> {
		if (!this.state.touched) {
			this.setState({
				touched: true,
			}, this.validate);
		}
	}

	handleBlur = ()=> {
		this.setState({
			blurred: true,
		}, this.validate);
	}

	contentChanged = (event)=> {
		this.props.handleChange(event)

		this.setState({
			value: event.target.value,
		}, this.validate);
	}

	validate = ()=> {
		const {validationRule} = this.props

		if (validationRule) {
			this.setState({
				valid: this.validationRules[validationRule](this.state.value),
			});
		}
	}

	shouldShowError = ()=> {
		console.log(this.state)
		return this.state.touched && this.state.blurred && !this.state.valid
	}



	render() {
		const {name, label, type, value, placeholder, handleChange, validationRule, validationText} = this.props;

		return (
			<div className="form-input">
				<div className="labels">
					<label htmlFor={name}>{label}</label>
					{this.shouldShowError() &&
						<span>{validationText}</span>
					}
				</div>
				<input
					type={type}
					name={name}
					id={name}
					value={value}
					onChange={this.contentChanged}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
					placeholder={placeholder}
				/>
			</div>

		)
	}
}

export default FormInput;