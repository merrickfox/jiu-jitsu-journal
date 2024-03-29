import classNames from "classnames";

const Button = (props) => {

	const {clickHandler, text, color} = props;
	let buttonClasses = classNames({
		'button': true,
		[`${color}`]: true,
	});

	return (
		<button onClick={clickHandler} className={buttonClasses}>
			{text}
		</button>
	)
}

export default Button;