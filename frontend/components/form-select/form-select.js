import React from "react";
import Select from 'react-select'



class FormSelect extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		const {name, label, text, value, placeholder, handleChange, options, config, customMenuList, customOption, forceOpen} = this.props;

		let customComponents = {};
		if (customMenuList) customComponents.MenuList = customMenuList;
		if (customOption) customComponents.Option = customOption;

		return (
			<div className="form-select">
				<label htmlFor={name}>{label}</label>
				<Select
					styles={config}
					options={options}
					placeholder={placeholder}
					onChange={handleChange}
					components={ customComponents }
					menuIsOpen={forceOpen}
				/>
			</div>

		)
	}
}

export default FormSelect;