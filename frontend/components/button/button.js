import classNames from "classnames";

const Button = (props) => {

	const {clickHandler, text} = props;
	let buttonClasses = classNames({
		'button': true
	});

	return (
		<button onClick={clickHandler} className={buttonClasses}>
			{text}
		</button>
	)
}

export default Button;