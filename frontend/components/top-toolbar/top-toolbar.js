import '../../styles/global.scss';
import './top-toolbar.scss';
import Logo from '../logo'
import React from 'react';



class TopToolbar extends React.Component {


	render() {

		return (
			<section className='top-toolbar'>
				<div className="logo-container">
					<Logo/>
					<h3>JiuJitsu Journal</h3>
				</div>
			</section>
		);
	}
}


export default TopToolbar;