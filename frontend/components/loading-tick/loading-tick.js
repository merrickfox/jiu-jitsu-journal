import React from 'react';


class LoadingTick extends React.Component {


	render() {
		const {done, message} = this.props;

		return (
			<div className='loading-tick'>
				<div className={"circle-loader "+ (done ? 'load-complete' : '')}>
					{ done &&
						<div className="checkmark draw"></div>
					}

				</div>
				{ message && done &&
					<span>{message}</span>
				}
			</div>

		);
	}
}


export default LoadingTick;