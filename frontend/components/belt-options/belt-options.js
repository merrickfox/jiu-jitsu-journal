import React from "react";
import '../../styles/global.scss'
import './belt-options.scss'
import classNames from "classnames";
import Belt from "../belt/belt";


class BeltOptions extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		const {children, innerProps, innerRef, value} = this.props;
		const beltDetails = value.split('.');
		let innerOptionClasses = classNames({
			'inner-option': true,
			'selected': this.props.isSelected,
		});

		return (
			<div ref={innerRef} {...innerProps} className="menu-item">
				<div className={innerOptionClasses}>
					<span>{children}</span>
					<Belt color={beltDetails[0]} stripes={parseInt(beltDetails[1])} />
				</div>
			</div>
		)
	}
}

export default BeltOptions;