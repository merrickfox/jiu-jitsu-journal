import React from 'react';
import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

import Select from 'grommet/components/Select';

class LoadingTick extends React.Component {


	render() {
		const {done, message} = this.props;

		return (
			<div className='container'>
				<div className={"circle-loader "+ (done ? 'load-complete' : '')}>
					{ done &&
						<div className="checkmark draw"></div>
					}

				</div>
				{ message && done &&
					<span>{message}</span>
				}
				{ /*language=CSS*/ }
				<style jsx>{`

						.container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
						}
						.circle-loader {
							margin-bottom: 1em;
							border: 1px solid rgba(0, 0, 0, 0.2);
							border-left-color: #865cd6;
							animation: loader-spin 1.2s infinite linear;
							position: relative;
							display: inline-block;
							vertical-align: top;
							border-radius: 50%;
							width: 7em;
							height: 7em;
						}

						.load-complete {
							-webkit-animation: none;
							animation: none;
							border-color: #865cd6;
							transition: border 500ms ease-out;
						}

						.checkmark.draw:after {
							animation-duration: 800ms;
							animation-timing-function: ease;
							animation-name: checkmark;
							transform: scaleX(-1) rotate(135deg);
						}
						.checkmark:after {
							opacity: 1;
							height: 3.5em;
							width: 1.75em;
							transform-origin: left top;
							border-right: 3px solid #865cd6;
							border-top: 3px solid #865cd6;
							content: '';
							left: 1.75em;
							top: 3.5em;
							position: absolute;
						}

						@keyframes loader-spin {
							0% {
								transform: rotate(0deg);
							}
							100% {
								transform: rotate(360deg);
							}
						}
						@keyframes checkmark {
							0% {
								height: 0;
								width: 0;
								opacity: 1;
							}
							20% {
								height: 0;
								width: 1.75em;
								opacity: 1;
							}
							40% {
								height: 3.5em;
								width: 1.75em;
								opacity: 1;
							}
							100% {
								height: 3.5em;
								width: 1.75em;
								opacity: 1;
							}
						}


					`}</style>
			</div>

		);
	}
}


export default LoadingTick;