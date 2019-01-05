import classNames from "classnames";

const TertiaryCta = (props) => {

	const {clickHandler, text, color} = props;
	let buttonClasses = classNames({
		'tertiary-cta': true,
		[`${color}`]: true,
	});

	return (
		<div onClick={clickHandler} className={buttonClasses}>
			{text}
		</div>
	)
}

export default TertiaryCta;