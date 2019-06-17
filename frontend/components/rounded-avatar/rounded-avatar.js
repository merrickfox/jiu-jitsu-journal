import classNames from "classnames";
import React from "react";

const RoundedAvatar = (props) => {

	const {size, imageUrl, alt} = props;
	let avatarClasses = classNames({
		'avatar-image': true,
		[`${size}`]: true,
	});

	return (
		<div  className="rounded-avatar">
			<img src={imageUrl} alt={alt} className={avatarClasses}/>
		</div>
	)
}

export default RoundedAvatar;