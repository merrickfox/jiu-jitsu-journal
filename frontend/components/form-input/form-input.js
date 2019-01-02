import React from "react";
import '../../styles/global.scss'
import './form.input.scss'

class FormInput extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		const {name, label, text, value, placeholder, handleChange} = this.props;

		return (
			<div className="form-element">
				<label htmlFor={name}>{label}</label>
				<input
					type={text}
					name={name}
					id={name}
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
				/>
			</div>

		)
	}
}

export default FormInput;