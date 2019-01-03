import './belt.scss'
import classNames from "classnames";

const Belt = (props) => {

	let beltClasses = classNames({
		'belt': true,
		[`${props.color}`]: true,
	});

	return (
		<div className={beltClasses}>
			<div className="crease1"></div>
			<div className="crease2"></div>
			<div className="crease3"></div>
			<div className="strap">
				{[...Array(props.stripes)].map((x, i) =>
					<div key={i} className="stripe"></div>
				)}
			</div>
		</div>
	)
}

export default Belt;




