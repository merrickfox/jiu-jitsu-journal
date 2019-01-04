import React from "react";
import "react-toggle/style.css"
import Toggle from 'react-toggle'

class FormCheckbox extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		const {label, value, handleChange, additional} = this.props;

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
						{additional}
					</span>
				</div>

			</div>

		)
	}
}

export default FormCheckbox;