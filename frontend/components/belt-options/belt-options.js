import React from "react";
import '../../styles/global.scss'
import './belt-options.scss'
import classNames from "classnames";


class BeltOptions extends React.Component {
	constructor (props) {
		super(props)
	}

	render() {
		const {children, innerProps, innerRef} = this.props;
		let innerOptionClasses = classNames({
			'inner-option': true,
			'selected': this.props.isSelected,
		});

		return (
			<div ref={innerRef} {...innerProps} className="menu-item">
				<div className={innerOptionClasses}>{children}</div>
			</div>
		)
	}
}

export default BeltOptions;