

class FormInput extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		const {name, label, type, value, placeholder, handleChange} = this.props;

		return (
			<div className="form-input">
				<label htmlFor={name}>{label}</label>
				<input
					type={type}
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