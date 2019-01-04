import React from "react";
import "react-toggle/style.css"
import Toggle from 'react-toggle'

class FormCheckbox extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		const {name, label, value, placeholder, handleChange} = this.props;

		return (
			<div className="form-checkbox">
				<div className="toggle">
					<Toggle
						defaultChecked={value}
						className='custom-toggle'
						aria-label='No label tag'
						onChange={handleChange} />
				</div>

				<div className="labelling">
					<label>{label}</label>
					<span className="additional">
						By selecting yes you will be associated with your chosen academy as an instructor.
						Future features will allow you to interact and coach students at this academy.
					</span>
				</div>

			</div>

		)
	}
}

export default FormCheckbox;