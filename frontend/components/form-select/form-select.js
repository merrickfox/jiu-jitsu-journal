import React from "react";
import Select from 'react-select'
import '../../styles/global.scss'
import './form-select.scss'


class FormSelect extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		const {name, label, text, value, placeholder, handleChange, options, config} = this.props;

		return (
			<div className="form-element">
				<label htmlFor={name}>{label}</label>
				<Select
					styles={config}
					options={options}
				/>
			</div>

		)
	}
}

export default FormSelect;